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
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
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

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_GAP);
    ctx.fillText(currentTime, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (TEXT_HEIGHT + TEXT_GAP * 2 + currentBarHeight));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var max = 80;
      var min = 20;
      var saturation = Math.random() * (max - min) + min;

      ctx.fillStyle = `hsl(250, 100%, ${saturation}%)`;
    }
    ctx.fillStyle = 'hsl(250, 100, 1)';
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (TEXT_HEIGHT + TEXT_HEIGHT + currentBarHeight), BAR_WIDTH, currentBarHeight);
  }
}
