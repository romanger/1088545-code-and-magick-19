'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var addWizard = function (element, node) {
    var wizardName = node.querySelector('.setup-similar-label');
    var wizardCoatColor = node.querySelector('.wizard-coat');
    var wizardEyeColor = node.querySelector('.wizard-eyes');

    wizardName.textContent = element.name;
    wizardCoatColor.style.fill = element.colorCoat;
    wizardEyeColor.style.fill = element.colorEyes;

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

  window.backend.load(renderWizardsList, window.tools.onError);
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
