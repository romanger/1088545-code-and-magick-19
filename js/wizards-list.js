'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getWizardsArray = function () {
    var wizards = [];

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      wizards[i] = {
        name: window.tools.getRandomArrayElement(window.tools.WIZARDS_NAMES),
        surname: window.tools.getRandomArrayElement(window.tools.WIZARDS_SURNAMES),
        coatColor: window.tools.getRandomArrayElement(window.tools.WIZARDS_COAT_COLORS),
        eyeColor: window.tools.getRandomArrayElement(window.tools.WIZARDS_EYES_COLORS)
      };
    }
    return wizards;
  };


  var onRenderError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var addWizard = function (element, node) {
    var wizardName = node.querySelector('.setup-similar-label');
    var wizardCoatColor = node.querySelector('.wizard-coat');
    var wizardEyeColor = node.querySelector('.wizard-eyes');

    wizardName.textContent = element.name + ' ' + element.surname;
    wizardCoatColor.style.fill = element.coatColor;
    wizardEyeColor.style.fill = element.eyeColor;

    return node;
  };

  var renderWizardsList = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement = addWizard(array[i], wizardElement);
      fragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(renderWizardsList, onRenderError);
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
