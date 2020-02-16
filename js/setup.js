'use strict';

(function () {

  var setupWindow = document.querySelector('.setup');
  var setupForm = setupWindow.querySelector('.setup-wizard-form');
  var setupPlayer = setupWindow.querySelector('.setup-player');
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
    onPlayerClick(evt.target, setupPlayerCoatInput, window.tools.WIZARDS_COAT_COLORS);
  });
  setupPlayerEyesColor.addEventListener('click', function (evt) {
    onPlayerClick(evt.target, setupPlayerEyesInput, window.tools.WIZARDS_EYES_COLORS);
  });
  setupPlayerFireballColor.addEventListener('click', function (evt) {
    onPlayerClick(evt.target, setupPlayerFireballInput, window.tools.FIREBALL_COLORS);
  });

  setupForm.addEventListener('submit', function (evt) {
    var errorMessage = document.querySelector('.top-error');
    evt.preventDefault();
    if (errorMessage) {
      errorMessage.remove();
    }
    window.backend.save(new FormData(setupForm), window.dialog.closePopup, window.tools.onError);
  });

})();
