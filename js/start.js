'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var TEXT_HEIGHT = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


var getRandomBlue = function (saturationMin, saturationMax) {
  var saturation = Math.random() * (saturationMax - saturationMin) + saturationMin;
  var randomeBlue = 'hsl(250, 100%, ' + saturation + '%)';
  return randomeBlue;
};

window.renderStatistics = function (ctx, names, times) {

  var title = 'Ура вы победили! \nСписок результатов:';
  var maxTime = Math.round(getMaxElement(times));


  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  title.split('\n').forEach(function (line, i) {
    ctx.fillText(line, CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP + TEXT_HEIGHT * i);
  });

  for (var i = 0; i < names.length; i++) {
    var currentTime = Math.round(times[i]);
    var currentBarHeight = Math.round(MAX_BAR_HEIGHT * currentTime / maxTime);

    var namePosition = {};
    namePosition.x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    namePosition.y = CLOUD_HEIGHT - TEXT_GAP;

    var timePosition = {};
    timePosition.x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    timePosition.y = CLOUD_Y + CLOUD_HEIGHT - (TEXT_HEIGHT + TEXT_GAP * 2 + currentBarHeight);

    var barPosition = {};
    barPosition.x = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    barPosition.y = CLOUD_Y + CLOUD_HEIGHT - (TEXT_HEIGHT + TEXT_HEIGHT + currentBarHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], namePosition.x, namePosition.y);
    ctx.fillText(currentTime, timePosition.x, timePosition.y);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomBlue(20, 80);
    }
    ctx.fillRect(barPosition.x, barPosition.y, BAR_WIDTH, currentBarHeight);
  }
};
