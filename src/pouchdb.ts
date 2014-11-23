/// <reference path="../typings/tsd.d.ts" />

import PouchDB = require('pouchdb');

export var module = angular.module('pouchdb', [])
  .factory('PouchDB', function () {
    return PouchDB;
  });
