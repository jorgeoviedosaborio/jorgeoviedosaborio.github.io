jQuery(document).ready(function(jQuery){
	/*
		* Masonry
		*/

	if ( jQuery.isFunction( jQuery.fn.masonry ) ) { 
		//Masonry blocks
		$blocks = jQuery('.grid');

		$blocks.imagesLoaded(function(){
			$blocks.masonry({
				itemSelector      : '.grid-item',
				columnWidth       : '.grid-item',
				// slow transitions
				transitionDuration: '1s'
			});

			// Fade blocks in after images are ready (prevents jumping and re-rendering)
			jQuery('.grid-item').fadeIn();

			$blocks.find( '.grid-item' ).animate( {
				'opacity' : 1
			} );
		});

		jQuery( function() {
			setTimeout( function() { $blocks.masonry(); }, 2000);
		});

		jQuery(window).resize(function () {
			$blocks.masonry();
		});
	}
});

jQuery(window).load(function () {
	if(jQuery('.main-slider').length){
		jQuery(".main-slider").data('owl.carousel').options.loop = true;
		jQuery(".main-slider").trigger( 'refresh.owl.carousel' );
	}
});
