$(document).ready(function() {
    "use strict";
    //LANGUAGES
    $('#lang-en').click(function() {
    	$('#wrapper').addClass('en').removeClass('vi');
    });
    $('#lang-vi').click(function() {
    	$('#wrapper').addClass('vi').removeClass('en');
    });
    $('.languages li').click(function() {
    	$('#screen-1').removeClass('show');
		$('#screen-2').addClass('open');
    });

    //CLOSE
    $('#close-2').click(function() {
    	$('#screen-1').addClass('show');
		$('#screen-2').removeClass('open');
    });
    $('#close-3').click(function() {
    	$('#screen-1').addClass('show');
		$('#screen-2').removeClass('open');
		$('#screen-3').removeClass('open');
    });

    //SHOW CONTENT
    $('.list-place li').click(function() {
    	$('#screen-1').removeClass('open');
    	$('#screen-2').removeClass('open');
    	$('#screen-3').addClass('open');
    	var placeName = $(this).attr('data-place');
    	$('.place-detail.open').removeClass('open');
    	$('.place-detail.'+placeName).addClass('open');
    });
    $('.button span').click(function() {
    	$('#screen-2').addClass('open');
    	$('#screen-3').removeClass('open');
    });



    //SLIDER
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        centerMode: false,
        centerPadding: 0,
        pauseOnHover: false,
        fade: false,
        variableWidth: false
    });
});