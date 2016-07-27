define(['jquery', 'bootstrap', 'menu', 'visible'], function (){
    'use strict';
    var App = {
        initialize: function () {
            this.testimonialCounter = 0;
            this.events();
            this.renderCarousel();
        },
        events: function () {
            
            if ($("#home").length > 0) {
                this.showEachTestimonial();
                this.toggleAccordionArrows();
                this.animatePitchIcons();
                this.initializeFixedPhoneNumber();
            }
            
        },
        renderRadiator: function (setCSSClass, xyPosition, currentTarget) {
            $('.radiator').css({
                left: parseInt($(currentTarget).position().left) + xyPosition + 'px',
                top: parseInt($(currentTarget).position().top) + xyPosition + 'px'
            });
            $(".radiator")[setCSSClass]("open");
        },
        renderCarousel: function () {
            $('#myCarousel').carousel();
            var winWidth = $(window).innerWidth();
        },
        animatePitchIcons: function () {
            var $pitchIcons = $(".purple-ring, .green-ring");
            $(window).scroll(function (event) {
                $pitchIcons.each(function (i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.removeClass('invisible');
                        el.addClass("animated bounceIn"); 
                    } else {
                        el.addClass('invisible');
                        el.removeClass("animated bounceIn");
                    }
                });
            });
           
        },
        initializeFixedPhoneNumber: function () {
            var $phoneNumber = $(".green-div-shoing-phone-no");
            var phoneNumberInitialPosition = $phoneNumber.offset().top;
            var that = this;
            $(window).resize(function () {
                $phoneNumber.removeClass("fixed-position");
                phoneNumberInitialPosition = $phoneNumber.offset().top;
                $phoneNumber.addClass("fixed-position");
                that.applyFixedPhoneNumber($phoneNumber, phoneNumberInitialPosition);
            });
            $(window).scroll(function () {
                that.applyFixedPhoneNumber($phoneNumber, phoneNumberInitialPosition);
            });
        },
        applyFixedPhoneNumber: function (phoneNumber, phoneNumberInitialPosition) {
            var $windowViewTopPosition = $(window).scrollTop();
            if (phoneNumberInitialPosition <= $windowViewTopPosition) {
                $(phoneNumber).addClass("fixed-position");
            } else {
                $(phoneNumber).removeClass("fixed-position");
            }
        },
        showEachTestimonial: function () {
            // Event Listener for the showing of the testimonials
            var that = this;
            var radiatorTimer = "";

            $(".left-nav, .right-nav, .dot").on("click", function (e) {
                var $currentTarget = $(e.currentTarget);
                var $reviewers = $(".reviewers");
                var $currentDot = '';
                var elCurrentDot = '';
                var testimonialsLength = $(".reviewers").length;

                if ($currentTarget.attr("class") === "right-nav") {
                    that.testimonialCounter >= testimonialsLength - 1 ? that.testimonialCounter = 0 : that.testimonialCounter++;
                } else if ($currentTarget.attr("class") === "left-nav") {
                    that.testimonialCounter <= 0 ? that.testimonialCounter = testimonialsLength - 1 : that.testimonialCounter--;
                } else {
                    that.testimonialCounter = $(".dot").index($currentTarget); 
                }

                $currentDot = $('.dot[data-reviewer='+ that.testimonialCounter +']');
                elCurrentDot = document.querySelector('.dot[data-reviewer="'+ that.testimonialCounter +'"]');
                
                $('.svg-usa .selected').removeClass('selected');
                $reviewers.removeClass('selected');
                
                if ($(".radiator").hasClass("open")){
                     that.renderRadiator("removeClass", parseInt(
                        elCurrentDot
                        .getBoundingClientRect().width / 2), elCurrentDot);
                     window.clearTimeout(radiatorTimer);
                }
                
                $('.radiator').css({
                    left: parseInt(
                        $currentDot
                        .position().left + 
                        (elCurrentDot
                        .getBoundingClientRect().width / 2)) + 'px',
                    top: parseInt(
                        $currentDot
                        .position().top + 
                        (elCurrentDot
                        .getBoundingClientRect().width / 2))+ 'px'
                });
                
                $('.svg-usa').find('[title="' + $currentDot.attr("data-state")+'"]').addClass('selected');
                $reviewers.closest('[data-reviewer="'+ that.testimonialCounter +'"]').addClass('selected');

                that.renderRadiator("addClass", -49 + parseInt(
                    elCurrentDot
                    .getBoundingClientRect().width / 2), elCurrentDot);
                
                radiatorTimer = setTimeout(function () {
                    that.renderRadiator("removeClass", parseInt(
                        elCurrentDot
                        .getBoundingClientRect().width / 2), elCurrentDot);
                }, 2100);
            });
        },
        toggleAccordionArrows: function () {
            //accordian arrow change logic
            $(".c_brand").on("click",function(e){
                // DOM ELEMENTS
                var clicledele = $(this);
                var elegoingtoopen = "";
                var indexofeleclicked;
                if (clicledele.parent().parent().children().next().hasClass("in")) {
                    elegoingtoopen = "close";
                    indexofeleclicked = clicledele.parent().parent().index();
                    var selectedele = clicledele.children('h4').children(':first-child');
                }

                if (!clicledele.parent().parent().children().next().hasClass("in")) {
                    elegoingtoopen = "open";
                    indexofeleclicked = clicledele.parent().parent().index();
                }
                
                $('div.panel').each(function (index, value) { 
                    if(elegoingtoopen == "open"){
                        var childeleloop = $(this).children('div').children('a').children('h4').children(':first-child');
                        if(indexofeleclicked == index){
                            childeleloop.removeClass('glyphicon-triangle-bottom');
                            childeleloop.addClass('glyphicon-triangle-right-cust');
                        } else{
                            childeleloop.removeClass('glyphicon-triangle-right-cust');
                            childeleloop.addClass('glyphicon-triangle-bottom');                            
                        }
                    }

                    if(elegoingtoopen == "close"){
                        var childeleloop = $(this).children('div').children('a').children('h4').children(':first-child');
                        if(indexofeleclicked == index){
                            childeleloop.removeClass('glyphicon-triangle-right-cust');
                            childeleloop.addClass('glyphicon-triangle-bottom');
                        } 
                    }
                });
            });
        }
    };
    App.initialize();
    
    return App;
});