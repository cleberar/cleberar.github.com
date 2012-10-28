/**
 * Classe Principal do meu site
 *
 * Project : Site Pessoal Cleber Rodrigues
 * Author  : Cleber Rodrigues <cleber@cleberrodrigues.com>
 */

;(function (global, $, window, undefined) {

"use strict";

var MeuSite = (function() {
    return {
        init: function() {

            $('.sb').tooltip();
            new $.scrolldeck({
                buttons: '.nav-button',
                easing : 'easeInOutExpo',
                slides : ".page"
            });
        },

        notFound: function() {
            $('.sb').tooltip();
        }
    }
})();

global.MeuSite = MeuSite;

})(this, window.jQuery, window);