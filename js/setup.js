'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (thisArray) {
  var randomElement = thisArray[Math.floor(Math.random() * thisArray.length)];
  return randomElement;
};

var getWizardsArray = function (names, surnames, coatColors, eyeColors) {
  var wizards = [];

  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomElement(names);
    wizards[i].surname = getRandomElement(surnames);
    wizards[i].coatColor = getRandomElement(coatColors);
    wizards[i].eyeColor = getRandomElement(eyeColors);
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

var setup = document.querySelector('.setup');

setup.classList.remove('hidden');
setup.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsArray = getWizardsArray(WIZARDS_NAMES, WIZARDS_SURNAMES, WIZARDS_COAT_COLORS, WIZARDS_EYES_COLORS);
var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement = addWizard(wizardsArray[i], wizardElement);
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);
