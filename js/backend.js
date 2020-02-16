'use strict';

(function () {
  var DATA_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;

  var StatusCode = {
    OK: 200
  };

  var request = function (data, onLoad, onError, method, url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        if (method === 'GET') {
          onLoad(xhr.response);
        } else {
          onLoad();
        }
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
    xhr.open(method, url);
    if (method === 'GET') {
      xhr.send();
    } else {
      xhr.send(data);
    }
  };

  var load = function (onLoad, onError) {
    request('', onLoad, onError, 'GET', DATA_URL);
  };

  var save = function (data, onLoad, onError) {
    request(data, onLoad, onError, 'POST', SAVE_URL);
  };

  window.backend = {
    load: load,
    save: save,
  };

})();
