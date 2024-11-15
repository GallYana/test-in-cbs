$(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 3,
    mobileFirst:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
          }
        },
    ]
  });
});
