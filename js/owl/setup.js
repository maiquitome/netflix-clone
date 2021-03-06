$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsive:{
    0:{
      items:3
    },
    400: {
      items:4
    },
    600:{
      items:5
    },
    // 700:{
    //   items: 5
    // },
    800:{
      items:6
    },
    900:{
      items:8
    }
  }
})