'use strict';

class Thermostat {

  constructor(temp = 20) {
    this._temp = temp;
  }

  increase() {
    this._temp++
  }

  decrease() {
    this._temp--
  }

}