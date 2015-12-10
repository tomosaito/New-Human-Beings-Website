
(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		


/* ====================== Smooth Scroll ==================================================== */

	$( "a.scroll-link" ).on( "click", function(e) {
		e.preventDefault();
		var tagetObj = $(this).attr('href');
		console.log(tagetObj);
		var scrollY = $(tagetObj).offset().top - 68;
		$('html,body').animate({scrollTop: scrollY},'slow');
	});



// Video wrapper to make it responsive
	var videoSelectors = [
		'iframe[src*="player.vimeo.com"]',
		'iframe[src*="youtube.com"]',
		'iframe[src*="youtube-nocookie.com"]',
		'iframe[src*="kickstarter.com"][src*="video.html"]',
		'iframe[src*="screenr.com"]',
		'iframe[src*="blip.tv"]',
		'iframe[src*="dailymotion.com"]',
		'iframe[src*="viddler.com"]',
		'iframe[src*="qik.com"]',
		'iframe[src*="revision3.com"]',
		'iframe[src*="hulu.com"]',
		'iframe[src*="funnyordie.com"]',
		'iframe[src*="flickr.com"]',
		'embed[src*="v.wordpress.com"]'
		// add more selectors here
	];
 	var allVideos = videoSelectors.join( ',' );
 	$( allVideos ).wrap( '<span class="fluid-video" />' ); // wrap them all!










	});
	
})(jQuery, this);
