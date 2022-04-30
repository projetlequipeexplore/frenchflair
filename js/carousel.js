$(window).ready(function(){
  var	carousel = $('#carousel-autres-equipes'),
    figure = $('figure', carousel),
    nav = $('nav', carousel),
    numImages = $("img", figure).length,
    theta =  2 * Math.PI / numImages,
    currImage = 0
  ;
  console.log({theta});

  nav.on("click", function(e) {
    e.stopPropagation();
    
    var t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
      return;
    
    if (t.classList.contains('next')) {
      currImage++;
    }
    else {
      currImage--;
    }
    
    figure.css({
      'transform': 'rotateY('+(currImage * -theta)+'rad)'
    });
  });
})

