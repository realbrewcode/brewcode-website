
 // Slick Slider
jQuery(".slick-slider").slick({
      dots:true,
      infinite: true,
      arrows:true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      verticalSwiping: false,
      keyboard: true,
      draggable: true,
      touchMove:true,
     
  responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:true
             
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
              
            }
          }
         
        ]

});
 

// Slick Scroll
// jQuery(function () {
//   const slider = jQuery(".slick-slider");
//   slider;

//   slider.on("wheel", function (e) {
//     e.preventDefault();

//     if (e.originalEvent.deltaY < 0) {
//       jQuery(this).slick("slickNext");
//     } else {
//       jQuery(this).slick("slickPrev");
//     }
//   });
// });


// KEYBOARD-EVENTS


// $(document).onclick('keyup', function(e) {
//   if(e.which == 39){
//       $('.slick-slider').carousel('next');
      
      
//   }
//   else if(e.which == 37){
//       $('.slick-slider').carousel('prev');
     
//   }
// });
// $(document).onclick('keyup', function(e) {
//   if(e.which == 38){
//       $('.slick-slider').carousel('next');
      
      
//   }
//   else if(e.which == 40){
//       $('.slick-slider').carousel('prev');
     
//   }
// });

