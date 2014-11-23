/// <reference path="../../typings/tsd.d.ts" />

import pouch = require('../pouchdb');
import fynx = require('../fynx');
import immutable = require('../immutable');
import angular = require('angular');

export class ClientsStore {

  private db:PouchDB;
  private store:Fynx.Store;

  constructor(PouchDB:PouchDB, Fynx:Fynx.Fynx, Immutable:any) {
    this.db = new PouchDB('clients');
    console.log(Immutable);
  }

}

export var module = angular.module('clients.store', [
  pouch.module.name,
  fynx.module.name,
  immutable.module.name
])
  .service('clientsStore', ClientsStore);
