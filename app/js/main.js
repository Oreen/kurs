$(function () {
  'use strict';

  $('select').select2();


  $('.js-our-advantages-slider-nav a').on('click', function (event) {
    var index = $(this).attr('href').slice(1);
    event.preventDefault();
    $(this).closest('.js-our-advantages-slider-nav').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $('.js-our-advantages-slider').flickity('select', index);
  });


  // Показать категории препаратов
  $('.js-show-items-toggle').on('click', function (event) {
    event.preventDefault();
    $('.category-row').removeClass('show-preparates-col');
    $(this).closest('.category-row').addClass('show-preparates-col');
  });

});