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
