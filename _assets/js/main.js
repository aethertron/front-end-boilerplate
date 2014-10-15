// HELLO COSMIC FRIENDS
// The module pattern is sweet
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var APP;

(function ($) {
  "use strict";
  APP = (function() {
    // private members
    var n;
    function fun() {}

    return {
      // public members
      init: function() {
      }
    };
  }());
    
  $(function () {
    APP.init();
  });
}(jQuery));
