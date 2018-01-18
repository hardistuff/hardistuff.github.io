$(document).ready(function(){

  var count = 0;
  var images = ['../img/fader/bg1.jpg',
                '../img/fader/bg2.jpg',
                '../img/fader/bg3.jpg'];
  var image = $('.fader');

  image.css('background','url('+images[count]+')');

  setInterval(function()){
    image.fadeOut(500, function(){
      image.css('background','url('+images[count++]+')');
      image.fadeIn(500);
    });
    if(count == images.length){
      count = 0;
    }
  }, 4000;

});
