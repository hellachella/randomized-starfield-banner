var $banner = $('.banner');
var $addStars;
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();



for (i = 0; i < 75; i++) {
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css('left', Math.random() * 1000);
  $addStars.css('top', Math.random() * 1000);
  $addStars.css('opacity', Math.random() * 10);
   $addStars.css('width', Math.random() * 1000);


  $banner.append($addStars);
};
