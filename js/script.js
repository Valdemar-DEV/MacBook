$('.sl_slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows : false,
        }
      }


    ]
  });