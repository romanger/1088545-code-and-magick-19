'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getWizardsArray = function () {
    var wizards = [];

    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      wizards[i] = {};
      wizards[i].name = window.tools.getRandomArrayElement(WIZARDS_NAMES);
      wizards[i].surname = window.tools.getRandomArrayElement(WIZARDS_SURNAMES);
      wizards[i].coatColor = window.tools.getRandomArrayElement(WIZARDS_COAT_COLORS);
      wizards[i].eyeColor = window.tools.getRandomArrayElement(WIZARDS_EYES_COLORS);
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

  window.wizardsList = {
    WIZARDS_NAMES: WIZARDS_NAMES,
    WIZARDS_SURNAMES: WIZARDS_SURNAMES,
    WIZARDS_COAT_COLORS: WIZARDS_COAT_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
  };

})();
