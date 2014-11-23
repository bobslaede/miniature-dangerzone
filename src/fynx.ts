/// <reference path="../typings/tsd.d.ts" />

import Fynx = require('fynx');

export var module = angular.module('fynx', [])
  .service('Fynx', function () {
    return Fynx;
  });
