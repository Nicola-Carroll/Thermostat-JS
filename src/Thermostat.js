'use strict';

class Thermostat {

  constructor(temp = 20) {
    this._temp = temp;
    this.powerSavingOn = false
  }

  increase() {
    this._checkMaxTemp()

    this._temp++
  }

  decrease() {
    this._checkMinTemp()

    this._temp--
  }

  _checkMinTemp() {
    if (this._temp === 10) {
      throw "Min temp reached"
    }
  }

  _checkMaxTemp() {
    if((this.powerSavingOn && this._temp===25) || (!this.powerSavingOn && this._temp===32)) {
      throw "Max temperature reached"
    }
  }

  powerSavingSwitch() {
    this.powerSavingOn ? this.powerSavingOn = false : this.powerSavingOn = true
  }

}