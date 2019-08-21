$(document).ready(function() {
	$('.popup_button').click(function(){
		$(this).toggleClass('open');
	});
});

// Range slider 
// Хз как его отделить от карты, но с картой в одном js файле слайдер не работает, 
// либо не работает карта, смотря, что выше стоит в файле.

var image = document.querySelector('.change-photo');
var contrast = document.querySelector('.contrast-slide');
var brightness = document.querySelector('.brightness');
var blur = document.querySelector('.blur');

contrast.addEventListener('change', function(e){
	image.style.filter = "contrast(" + e.target.value + "%" +")";
});
brightness.addEventListener('change', function(e){
	image.style.filter = "brightness(" + e.target.value + "%" +")";
});
blur.addEventListener('change', function(e){
	image.style.filter = "blur(" + e.target.value + "px" +")";
});