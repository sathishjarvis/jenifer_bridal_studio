// Mobile Responsive & Animation Enhancements
(function($) {
    "use strict";

    // Smooth scroll for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
            && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 800, 'easeInOutExpo');
            }
        }
    });

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.ftco-animate, .services, .model-entry, .blog-entry').forEach(function(el) {
            observer.observe(el);
        });
    }

    // Mobile menu close on link click
    $('#colorlib-main-nav ul li a').on('click', function() {
        $('body').removeClass('menu-show');
        $('#colorlib-main-nav').removeClass('active');
        $('.js-colorlib-nav-toggle').removeClass('active');
    });

    // Add touch-friendly hover for mobile
    if ('ontouchstart' in window) {
        $('.model-entry, .blog-entry, .services').on('touchstart', function() {
            $(this).addClass('touch-hover');
        }).on('touchend', function() {
            var self = this;
            setTimeout(function() {
                $(self).removeClass('touch-hover');
            }, 300);
        });
    }

    // Responsive text scaling
    function adjustForMobile() {
        var width = $(window).width();
        if (width < 768) {
            $('.video-hero .text h2').css('font-size', Math.min(50, width * 0.12) + 'px');
            $('.heading-section h2').css('font-size', Math.min(36, width * 0.09) + 'px');
        }
    }

    $(window).on('resize', adjustForMobile);
    adjustForMobile();

    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img').forEach(function(img) {
            img.setAttribute('loading', 'lazy');
        });
    }

})(jQuery);