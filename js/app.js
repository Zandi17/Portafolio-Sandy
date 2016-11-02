$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



// ------------------------------------------------------------------

(function( $ ){

	var defaults = {
		options: {
			autoAdd: {
			helpBlocks: true
			},
		},
    methods: {
      init : function( options ) {
        return this.each(function(){
          if (settings.options.sniffHtml) {
            var message = "";
          }
        });
      },
    },
	};

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};


})( jQuery );


$(document).ready(function() {
  $('.html').css('width', '90%');
  $('.css').css('width', '90%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '60%');
  $('.adobe').css('width', '80%');
  $('.wordpress').css('width', '10%');
  $('.ui').css('width', '70%');
  $('.rwd').css('width', '80%');
});
