define(function(require) {

    var menu = {
        initialize: function  () {
            this.bodyEl = document.body;
		    this.content = document.querySelector( '.content-wrap' );
            this.openbtn = document.getElementById( 'open-button' );
            this.closebtn = document.getElementById( 'close-button' );
            this.isOpen = false;
            this.Snap = require('libs/snap/snap.svg-min');

            this.morphEl = document.getElementById( 'morph-shape' );
            
            this.s = Snap( this.morphEl.querySelector( 'svg' ) );
            this.path = this.s.select( 'path' );
            this.initialPath = this.path.attr('d');
            this.pathOpen = this.morphEl.getAttribute( 'data-morph-open' );
            this.isAnimating = false;

            this.initEvents();
        },
        initEvents: function () {
            var that = this;
            this.openbtn.addEventListener( 'click', function () {
                that.toggleMenu(that) 
            });
            if( this.closebtn ) {
                this.closebtn.addEventListener( 'click', function () {
                     that.toggleMenu(that) 
                });
            }

            // close the menu element if the target it´s not the menu element or one of its descendants..
            this.content.addEventListener( 'click', function(ev) {
                var target = ev.target;
                if( this.isOpen && target !== this.openbtn ) {
                    this.toggleMenu(that);
                }
            });
        },
        toggleMenu: function (that) {
            if( that.isAnimating ) return false;
            that.isAnimating = true;
            if( that.isOpen ) {
                that.bodyEl.classList.remove('show-menu');
                // animate path
                setTimeout( function() {
                    // reset path
                    that.path.attr( 'd', that.initialPath );
                    that.isAnimating = false; 
                }, 300 );
            }
            else {
                that.bodyEl.classList.add('show-menu');
                // animate path
                that.path.animate( { 'path' : that.pathOpen }, 400, mina.easeinout, function() { that.isAnimating = false; } );
            }
            that.isOpen = !that.isOpen;
        }
    }

	menu.initialize();

});