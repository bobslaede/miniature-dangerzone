/// <reference path="../../typings/tsd.d.ts" />

import fynx = require('../fynx');
import angular = require('angular');

class ClientsActions {

  public actions:Fynx.Actions;

  constructor(Fynx:Fynx.Fynx) {
    this.actions = Fynx.createActions([
      'create',
      'delete',
      'update'
    ]);
  }

}

export var module = angular.module('clients.actions', [
  fynx.module.name
])
  .service('clientsActions', ClientsActions);
