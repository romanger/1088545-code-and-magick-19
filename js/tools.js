'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomArrayElement = function (array) {
    var randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.tools = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    FIREBALL_COLORS: FIREBALL_COLORS,
    getRandomArrayElement: getRandomArrayElement,
    onError: onError,
  };
})();
