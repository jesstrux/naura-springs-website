(function($){
    $(function() {

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
})(jQuery); // end of jQuery name space