'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var WIZARDS_AMOUNT = 4;
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var usernameInput = setup.querySelector('.setup-user-name');
var usernameInputFocus = false;
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var setupPlayer = setup.querySelector('.setup-player');
var setupPlayerCoatColor = setupPlayer.querySelector('.wizard-coat');
var setupPlayerEyesColor = setupPlayer.querySelector('.wizard-eyes');
var setupPlayerFireballColor = setupPlayer.querySelector('.setup-fireball-wrap');
var setupPlayerCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
var setupPlayerEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
var setupPlayerFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

var onClickPlayerCoat = function () {
  var coatColor = getRandomElement(WIZARDS_COAT_COLORS);
  setupPlayerCoatColor.style.fill = coatColor;
  setupPlayerCoatInput.value = coatColor;
};

var onClickPlayerEyes = function () {
  var eyeColor = getRandomElement(WIZARDS_EYES_COLORS);
  setupPlayerEyesColor.style.fill = eyeColor;
  setupPlayerEyesInput.value = eyeColor;
};

var onClickPlayerFireball = function () {
  var fireballColor = getRandomElement(FIREBALL_COLORS);
  setupPlayerFireballColor.style.backgroundColor = fireballColor;
  setupPlayerFireballInput.value = fireballColor;
};

var onFocusIn = function () {
  usernameInputFocus = true;
};

var onFocusOut = function () {
  usernameInputFocus = false;
};

usernameInput.addEventListener('focus', onFocusIn);
usernameInput.addEventListener('blur', onFocusOut);

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && !usernameInputFocus) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var getRandomElement = function (thisArray) {
  var randomElement = thisArray[Math.floor(Math.random() * thisArray.length)];
  return randomElement;
};

var getWizardsArray = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards[i] = {};
    wizards[i].name = getRandomElement(WIZARDS_NAMES);
    wizards[i].surname = getRandomElement(WIZARDS_SURNAMES);
    wizards[i].coatColor = getRandomElement(WIZARDS_COAT_COLORS);
    wizards[i].eyeColor = getRandomElement(WIZARDS_EYES_COLORS);
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupPlayerCoatColor.addEventListener('click', onClickPlayerCoat);
setupPlayerEyesColor.addEventListener('click', onClickPlayerEyes);
setupPlayerFireballColor.addEventListener('click', onClickPlayerFireball);

setup.querySelector('.setup-similar').classList.remove('hidden');

var wizardsArray = getWizardsArray();
renderWizardsList(similarWizardTemplate, wizardsArray, similarListElement);
