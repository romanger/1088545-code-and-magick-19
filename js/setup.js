'use strict';

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

  for (var i = 0; i < 4; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomElement(names);
    wizards[i].surname = getRandomElement(surnames);
    wizards[i].coatColor = getRandomElement(coatColors);
    wizards[i].eyeColor = getRandomElement(eyeColors);
  }
  return wizards;
};

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardsArray = getWizardsArray(WIZARDS_NAMES, WIZARDS_SURNAMES, WIZARDS_COAT_COLORS, WIZARDS_EYES_COLORS);
var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var wizardName = wizardElement.querySelector('.setup-similar-label');
  var wizardCoatColor = wizardElement.querySelector('.wizard-coat');
  var wizardEyeColor = wizardElement.querySelector('.wizard-eyes');

  wizardName.textContent = wizardsArray[i].name + ' ' + wizardsArray[i].surname;
  wizardCoatColor.style.fill = wizardsArray[i].coatColor;
  wizardEyeColor.style.fill = wizardsArray[i].eyeColor;

  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);
