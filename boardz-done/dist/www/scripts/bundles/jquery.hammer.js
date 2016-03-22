"bundle";
(function() {
var define = System.amdDefine;
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define("jquery/jquery.hammer", ["jquery", "hammerjs"], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammerjs'));
  } else {
    factory(jQuery, Hammer);
  }
}(function($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if (!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }
  $.fn.hammer = function(options) {
    return this.each(function() {
      hammerify(this, options);
    });
  };
  Hammer.Manager.prototype.emit = (function(originalEmit) {
    return function(type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  })(Hammer.Manager.prototype.emit);
}));

})();