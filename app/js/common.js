
$(document).ready(function() {

    // Menu Scroll
    var nav_container = $(".header");
    var nav = $(".header-second");

    var top_spacing = 0;
    var waypoint_offset = -75;

    nav_container.waypoint({
        handler: function(event, direction) {

            if (direction == 'down') {

                nav_container.css({ 'height':nav.outerHeight() });
                nav.stop().addClass("headerScroll").css("top",-nav.outerHeight()).animate({"top":top_spacing});

            } else {

                nav_container.css({ 'height':'auto' });
                nav.stop().removeClass("headerScroll").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});

            }

        },
        offset: -1
		/*offset: function() {
		 return -nav.outerHeight()-waypoint_offset;
		 }*/
    });


// SHOW MAIN MENU
	$('.button-menu').click(function(e) {
			$(this).toggleClass('active');
			$('.box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
		
	
		$('.close-menu').click(function() {
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});
	
		$('body').click(function(e){
			e.stopPropagation();
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});

    // ANCOR
    $(".main-menu > li > a[href*='#'], .link-prev, .fixed-icons__link--contact").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 80}, 1000);
        e.preventDefault();
        return false;
    });

    // REVIEWS
    $('.reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        //centerMode: true,
        //centerPadding: '4px',
        appendArrows: $('.b-nav'),
        prevArrow: '<button id="prev" type="button" class="slick-arrow--prev"></button>',
        nextArrow: '<button id="next" type="button" class="slick-arrow--next"></button>',
        responsive: [
            /*{
             breakpoint: 640,
             settings: {
             slidesToShow: 2
             //variableWidth: false,
             }
             },*/
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });

});





