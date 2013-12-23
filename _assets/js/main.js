(function () {
  "use strict";
  var app = {
    
    colourPalette: function() {
      $('.palette li').each(function(i, e) {
        var colourValue = $(e).text();
        $(e).prepend('<span class="palette-sample" style="background:' + colourValue + 
        '"></span>')
      });
    },
    init: function () {
      app.colourPalette();
    }
  }
  app.init();
})();

// Module pattern FTW: 
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
