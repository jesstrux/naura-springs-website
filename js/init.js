(function($){
    $(function() {
        $('.materialboxed').each(function(){
            $(this).removeClass('materialboxed');
        });

        /* SETTING ACTIVE LINK */

        $('.button-collapse').sideNav({
            menuWidth: 300 // Default is 240
            // closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });

        /* PARALLAX effect */
        //$('.parallax').parallax();

        $('.materialboxed').materialbox();

        $('select').material_select();

        /* CAROUSEL effect */
        $('.slider').slider({full_width: false, indicators:true, height: 450});
    }); // end of document ready


    $(document).on('click', '.toggleCalendar', function(){
        $(this).find('i').slideToggle();
        $('.calendar-container').slideToggle();

        $('#bookroom').slideToggle();
    });

    // $('#gallery').serialScroll({
    //     target:'.section',
    //     items:'img', // Selector to the items ( relative to the matched elements, '#sections' in this case )
    //     prev:'span.prev',// Selector to the 'prev' button (absolute!, meaning it's relative to the document)
    //     next:'span.next',// Selector to the 'next' button (absolute too)
    //     axis:'x',// The default is 'y' scroll on both ways
    //     offset:-230, //when scrolling to photo, stop 230 before reaching it (from the left)
    //     duration:1200,
    //     force:true,
    //     stop:true,
    //     lock:false,
    //     event:'click',
    //     cycle:false, //don't pull back once you reach the end
    //     easing:'easeOutQuart', //use this easing equation for a funny effect
    //     jump: true //click on the images to scroll to them
    // });
    
    var $gallery = $('#gallery');
    $gallery.serialScroll({
        target:'.section',
        items:'img',
        prev:'span.prev',// Selector to the 'prev' button (absolute!, meaning it's relative to the document)
        next:'span.next',// Selector to the 'next' button (absolute too)
        duration:2000,
        force:true,
        axis:'x',
        easing:'linear',
        lazy:true,
        // interval:3,
        step:1,
    }); 
})(jQuery);