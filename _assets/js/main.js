// HELLO COSMIC FRIENDS
// The module pattern is sweet
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var APP;

(function ($) {
  "use strict";
  APP = (function() {
    function drawColourPalette() {
      $('.palette li').each(function() {
        var colourValue = $(this).text();
        $(this).prepend('<span class="palette-sample" style="background:'
                + colourValue + '"></span>');
      });
    }

    return {
      init: function() {
        drawColourPalette();
      }
    };
  }());
    
  $(function () {
    APP.init();
  });
}(jQuery));
