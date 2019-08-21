$(document).ready(function() {
	$('.popup_button').click(function(){
		$(this).toggleClass('open');
	});
});

// Карусель.
// .owl-carousel.owl-theme
// 		.carousel-item
// 		.carousel-item
// 		.carousel-item
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	//	nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	margin: 10,
	//	autoWidth:true,
		items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
	//	responsive: {0:{items:1}, 600:{items:2, center:false}, 900:{items:3}},
	});
});

// Своя иконка на картах. После блока код может не правильно работать

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [59.9360000, 30.3209000], // Y, X более 12000 (относительно центра) может выйти за пределы экрана на мобильных 
					zoom: 17
			}, {searchControlProvider: 'yandex#search'}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки', //Отметка центра карты
					balloonContent: 'Html Accademy'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '',
					// Размеры метки.
					iconImageSize: [30, 42],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkWithContent = new ymaps.Placemark([59.9360000, 30.3209000], {
					hintContent: '',
					balloonContent: 'Html Accademy',
					iconContent: '' //Не забыть удалить
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: '../img/svg/map-marker.svg',
					// Размеры метки.
					iconImageSize: [70, 120],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-30, -110],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkWithContent);
});

