/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) { sd
    let hasBeenCalled = false;
    let res;
  
    return function() {
      if (!hasBeenCalled) {
        hasBeenCalled = true;
        res = fn.apply(this, arguments);
        return res;
      }
        return;
    };
  };