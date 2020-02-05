'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupPlayer = document.querySelector('.setup-player');
  var setupPlayerCoatColor = setupPlayer.querySelector('.wizard-coat');
  var setupPlayerEyesColor = setupPlayer.querySelector('.wizard-eyes');
  var setupPlayerFireballColor = setupPlayer.querySelector('.setup-fireball');
  var setupPlayerCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
  var setupPlayerEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
  var setupPlayerFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

  var onPlayerClick = function (element, input, colorArray) {
    var color = window.tools.getRandomArrayElement(colorArray);

    if (element === setupPlayerFireballColor) {
      element.parentElement.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    input.value = color;
  };

  setupPlayerCoatColor.addEventListener('click', function (evt) {
    onPlayerClick(evt.target, setupPlayerCoatInput, window.wizardsList.WIZARDS_COAT_COLORS);
  });
  setupPlayerEyesColor.addEventListener('click', function (evt) {
    onPlayerClick(evt.target, setupPlayerEyesInput, window.wizardsList.WIZARDS_EYES_COLORS);
  });
  setupPlayerFireballColor.addEventListener('click', function (evt) {
    onPlayerClick(evt.target, setupPlayerFireballInput, FIREBALL_COLORS);
  });

})();
