'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomArrayElement = function (array) {
    var randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('top-error');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.tools = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    FIREBALL_COLORS: FIREBALL_COLORS,
    WIZARDS_COAT_COLORS: WIZARDS_COAT_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
    getRandomArrayElement: getRandomArrayElement,
    onError: onError,
  };
})();
