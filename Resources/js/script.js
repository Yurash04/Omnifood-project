$(document).ready(function() {

    /* For the sticky navigation */                                  
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
  
    /*
    // Scroll on buttons 

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 2000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
    */

    
    // Animation on menu
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__fadeIn');
        }, { offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__fadeInUp');
        }, { offset: '90%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__fadeIn');
        }, { offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__pulse');
        }, { offset: '80%'
    });

    //$('.row img').removeAttr('class');
    //console.log($('.row a ion-icon').attr('name'));


    /* Moblie nav */

    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--upper-nav a ion-icon')

        nav.slideToggle(200);
        if ($(icon).attr('name') === 'menu-outline') {
            $(icon).attr('name', 'close-outline')
        } else {
            $(icon).attr('name', 'menu-outline')
        }

        //<ion-icon name="close-outline" class="dos"></ion-icon>
    });
    

});