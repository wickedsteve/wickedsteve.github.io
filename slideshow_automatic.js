// Slideshow (automatic variant)  v1.0
// http://www.dithered.com/javascript/slideshow_automatic/index.html
// by Chris Nott (chris@dithered.com)

var slideshowAutomaticSlides = new Array();
var slideshowAutomaticCurrent = 0;


// Preload slideshow images
function slideshowAutomaticInit() {
	if (document.images) {
		for (var i = 0; i < slideshowAutomaticImageFiles.length; i++) {
			slideshowAutomaticSlides[i]     = new Image();
			slideshowAutomaticSlides[i].src = slideshowAutomaticImageDirectory + slideshowAutomaticImageFiles[i];
		}
		setTimeout('slideshowAutomaticForward();', slideshowAutomaticDelayBeforeStart*1000);
	}
}


// Show next slide
function slideshowAutomaticForward() {
	if (document.images && typeof slideshowAutomaticSlides != 'undefined') {
		slideshowAutomaticCurrent++;
		if (slideshowAutomaticCurrent >= slideshowAutomaticSlides.length) slideshowAutomaticCurrent = 0;
		document.images.slideshowAutomatic.src = slideshowAutomaticSlides[slideshowAutomaticCurrent].src;
	}
	setTimeout('slideshowAutomaticForward();', slideshowAutomaticDelayBetweenSlides*1000);
}