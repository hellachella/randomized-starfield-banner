var $banner = $('.banner');
var $addStars;
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();



for (i = 0; i < 75; i++) {
  $rotateNum = Math.random() * 1000;
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css({
    left: Math.random() * 1000,
    top: Math.random() * 1000,
    opacity: Math.random() * 10,
    width: Math.random() * 100,
    transform: 'rotate(' + $rotateNum + 'deg)'
  });

 $banner.append($addStars);
};


