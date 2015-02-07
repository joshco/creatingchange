$(document).ready(function() {
   
   window.setTimeout(rotator,2000);

});

function rotator() {
	flip_images();
	window.setTimeout(rotator,2000);

}
function flip_images() {
	 	$(".image-flip").fadeToggle();
}
function show_image(i) {
	$(".image-flip")[i].fadeToggle();
}