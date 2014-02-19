
;(function( $, undefined ) {

    "use strict";

    $( document ).on( 'ready', function() {

        $( '.btn-navbar' ).click( function() {
            $( 'html' ).toggleClass( 'expanded' );
        });

        var $htmlbody = $( 'html,body' ),
            $navigation = $( '.navigation' ).find( 'li' );

        $navigation.click( function( e ) {

            e.preventDefault();

            $navigation.removeClass( "active" );
            $( this ).addClass( "active" );

            $htmlbody.animate({
                "scrollTop" : $('#' + $(this).attr('data-section')).offset().top
            }, 500, 'easeOutQuart');
        });

        $( '#github .projects li' ).on( 'click', function () {

            var $section = $( this ).parents( '.span4' ),
                project = $( this ).attr( 'data-project' );

            $(this).siblings( '.current' ).removeClass( 'current' );
            $(this).addClass( 'current' );

            $section.siblings( '.current' ).removeClass( 'current' ).hide();

            $section.siblings().each(function() {
                if ( $( this ).attr( 'data-project' ) == project ) {
                    $( this ).slideDown( 500, "easeInQuart" ).addClass( 'current' );
                }
            });
        });
    });

}( window.jQuery ));