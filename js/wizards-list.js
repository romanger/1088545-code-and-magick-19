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

  var addWizard = function (element, node) {
    var wizardName = node.querySelector('.setup-similar-label');
    var wizardCoatColor = node.querySelector('.wizard-coat');
    var wizardEyeColor = node.querySelector('.wizard-eyes');

    wizardName.textContent = element.name + ' ' + element.surname;
    wizardCoatColor.style.fill = element.coatColor;
    wizardEyeColor.style.fill = element.eyeColor;

    return node;
  };

  var renderWizardsList = function (template, array, destination) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      var wizardElement = template.cloneNode(true);
      wizardElement = addWizard(array[i], wizardElement);
      fragment.appendChild(wizardElement);
    }
    destination.appendChild(fragment);
  };

  var wizardsArray = getWizardsArray();
  renderWizardsList(similarWizardTemplate, wizardsArray, similarListElement);
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
