'use strict';

(function () {
  var getRandomArrayElement = function (array) {
    var randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  };
  window.tools = {
    getRandomArrayElement: getRandomArrayElement
  };
})();
