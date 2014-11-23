/// <reference path="../typings/tsd.d.ts" />

import PouchDB = require('pouchdb');

export var module = angular.module('pouchdb', [])
  .service('PouchDB', function () {
    return PouchDB;
  });
