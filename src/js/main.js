
    var owl = $('[data-owl="slider1"]');

    // owl.owlCarousel();
    owl.owlCarousel({
        items:7.5,
        loop:true,
        margin:10,
        merge: true,
        autoplay:true,
        nav: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:5,
            },
            600:{
                items:7.5
            },
        }
      
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[6000])
        
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })


    var owl2 = $('[data-owl="slider2"]');

    // owl.owlCarousel();
    owl2.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        center: true,
        // merge: true,
        autoplay:true,
        nav: true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2.1
            },
            600:{
                items:3
            },
        }
    });
    $('.play').on('click',function(){
        owl2.trigger('play.owl.autoplay',[8000])
        
    })
    $('.stop').on('click',function(){
        owl2.trigger('stop.owl.autoplay')
    })

    var owl3 = $('[data-owl="slider3"]');

    // owl.owlCarousel();
    owl3.owlCarousel({
        items:3,
        loop:true,
        margin:20,
        center: true,
        responsive:{
            0:{
                items:2.25,
                merge: true,
                loop:true,
                center: false,
            },
            600:{
                items:6,
                merge: false,
                loop:true,
                center: true,
            },
        }
        
    });


    var owl4 = $('[data-owl="slider4"]');

    // owl.owlCarousel();
    owl4.owlCarousel({
        items:8,
        loop:true,
        margin:10,
        center: true,
        merge: true,
        autoplay:true,
        nav: true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3.7,
                merge: true,
                loop:true,
            },
            600:{
                items:6,
                merge: true,
                loop:true,
            },
            1000:{
                items:13,
                merge: true,
                loop:true,
            },
        }
    });

    var owl5 = $('[data-owl="slider5"]');

    // owl.owlCarousel();
    owl5.owlCarousel({
        items:1,
        margin:10,
        center: true,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:7,
                merge: true,
                loop:true,
                center: false,
            },
            600:{
                items:7,
                merge: true,
                loop:true,
                center: false,
            },
        }
    });


