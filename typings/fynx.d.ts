/**
 * Created by jeppe on 11/23/14.
 */


declare module Fynx {

  interface Action {
    listen(callback:Function): void;
  }

  interface Actions {
    [index: string] : Fynx.Action
  }

  interface Fynx {
    createActions (actions:string[]) : Fynx.Actions;
  }

}

declare var Fynx:Fynx.Fynx

declare module 'fynx' {
  export = Fynx;
}
