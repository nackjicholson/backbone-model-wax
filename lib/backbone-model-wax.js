// ## backbone-model-wax.js
// 
// // author: Will Vaughn
//
// > description
// 
// The below Use Anywhere setup was so graciously provided to me by:
// <https://github.com/umdjs/umd/blob/master/returnExports.js>

(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports, like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.modelwax = factory();
  }
}(this, function () {
  'use strict';

  // This is backbone-model-wax.
  return {

    wax: function() {
      var args = 1 <= arguments.length ? [].slice.call(arguments, 0) : []; 

      if (typeof args[0] === 'function') {
        this.on('wax', args[0], this); 
      } else {
        args.unshift('wax', this); 
        this.trigger.apply(this, args); 
      } 

      return this; 
    },

    isOn: function() {
      return this.get("on") === true; 
    },

    _waxOn: function(options) {
      this.set({on: true}, options); 
    },

    _waxOff: function(options) {
      this.set({on: false}, options); 
    } 
  };
}));