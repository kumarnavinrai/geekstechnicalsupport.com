define(['jquery', 'bootstrap', 'menu'], function (){
    'use strict';
    var App = {
        initialize: function () {
            this.events();
            this.renderCarousel();
        },
        events: function () {
            var that = this;
            $(".dot").on("click", function (e) {
                var currentTarget = e.currentTarget;
                $('.radiator').css({
                    left: parseInt($(currentTarget).position().left + (currentTarget.getBoundingClientRect().width / 2)) + 'px',
                    top: parseInt($(currentTarget).position().top + (currentTarget.getBoundingClientRect().width / 2))+ 'px'
                });
                if ($(".dot").hasClass("open")){
                     that.renderRadiator("removeClass", parseInt(currentTarget.getBoundingClientRect().width / 2), currentTarget);
                }
                that.renderRadiator("addClass", -49 + parseInt(currentTarget.getBoundingClientRect().width / 2), currentTarget);
                setTimeout(function () {
                    that.renderRadiator("removeClass", parseInt(currentTarget.getBoundingClientRect().width / 2), currentTarget);
                }, 2100);
            });
        },
        renderCarousel: function () {
            $('#myCarousel').carousel();
            var winWidth = $(window).innerWidth();
            $(window).resize(function () {

                if ($(window).innerWidth() < winWidth) {
                    $('.carousel-inner>.item>img').css({
                        'min-width': winWidth, 'width': winWidth
                    });
                }
                else {
                    winWidth = $(window).innerWidth();
                    $('.carousel-inner>.item>img').css({
                        'min-width': '', 'width': ''
                    });
                }
            });
        },
        renderRadiator: function (setCSSClass, xyPosition, currentTarget) {
            $('.radiator').css({
                left: parseInt($(currentTarget).position().left) + xyPosition + 'px',
                top: parseInt($(currentTarget).position().top) + xyPosition + 'px'
            });
            $(".radiator")[setCSSClass]("open");
        }
    };
    App.initialize();
    
    return App;
});