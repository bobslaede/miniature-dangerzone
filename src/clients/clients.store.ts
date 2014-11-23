/// <reference path="../../typings/tsd.d.ts" />

import pouch = require('../pouchdb');
import angular = require('angular');

class ClientsStore {

  private PouchDB:PouchDB;
  private db:PouchDB;

  constructor(PouchDB:PouchDB) {
    this.PouchDB = PouchDB;
    this.db = new this.PouchDB('clients');
  }

}

export var module = angular.module('clients.store', [
  pouch.module.name
])
  .service('clientsStore', ClientsStore);
