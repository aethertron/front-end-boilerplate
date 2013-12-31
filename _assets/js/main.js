(function ($) {
  "use strict";
  var app = {
    shapes: function() {
    
    
    },
    initSpotlight: function() {
      // (depends on data-hrefs plugin)
      $('.spotlight').each(function(i, e) {
        $(this).attr('data-href', $(this).find('a').first().attr('href'));
      });
    },
    drawColourPalette: function() {
      $('.palette li').each(function(i, e) {
        var colourValue = $(e).text();
        $(e).prepend('<span class="palette-sample" style="background:' + colourValue + 
        '"></span>')
      });
    },
    init: function () {
      app.initSpotlight();
      app.drawColourPalette();
      // initialises data-hrefs plugin
      sethrefs();
      app.shapes();
    }
  }
  app.init();
})(jQuery);

// Module pattern FTW: 
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
