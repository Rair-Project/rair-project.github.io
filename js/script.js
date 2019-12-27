jQuery(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	window.onload = function () {
		document.getElementById('preloader').style.display = 'none';
	}


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
});
// End Jquery Function


	/* ========================================================================= */
	/*	Animated section
	/* ========================================================================= */

	var wow = new WOW(
		{
		  offset:       100,          // distance to the element when triggering the animation (default is 0)
		  mobile:       false      // trigger animations on mobile devices (default is true)
		}
	 );
	 wow.init();


	/* ========================================================================= */
	/*	Smooth Scroll
	/* ========================================================================= */
	var scroll = new SmoothScroll('a[href*="#"]');

