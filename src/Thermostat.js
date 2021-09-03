'use strict';

class Thermostat {

  constructor(temp = 20) {
    this.temp = temp;
    this.powerSavingOn = true;
  }

  increase() {
    this._checkMaxTemp()

    this.temp++
  }

  decrease() {
    this._checkMinTemp()

    this.temp--
  }

  _checkMinTemp() {
    if (this.temp === 10) {
      throw "Min temp reached"
    }
  }

  _checkMaxTemp() {
    if((this.powerSavingOn && this.temp===25) || (!this.powerSavingOn && this.temp===32)) {
      throw "Max temperature reached"
    }
  }

  powerSavingSwitch() {
    this.powerSavingOn ? this.powerSavingOn = false : this.powerSavingOn = true
  }

  reset() {
    this.temp = 20;
  }

  energyUsage() {
    if (this.temp <=  18) {
      return 'low-usage';
    } else if ( this.temp <= 25 && this.temp > 18) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

}