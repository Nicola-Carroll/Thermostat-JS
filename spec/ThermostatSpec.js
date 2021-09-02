'use strict';

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  describe('new', () => {
    it('is expected to be an instance of the Thermostat', () => {
      expect(thermostat).toBeInstanceOf(Thermostat);
    })
    
    it('is expected to have a default temp of 20', () => {
      expect(thermostat).toEqual(jasmine.objectContaining({ _temp: 20 }))
    })
  })

  describe('increase', () => {
    it('is expected to increase temp by 1', () => {
      thermostat.increase();
      expect(thermostat._temp).toEqual(21);
    })

    it('throws and error if temp is increased above 32', () => {
      thermostat.powerSavingSwitch();
      thermostat._temp = 32;
      expect( () => { thermostat.increase() }).toThrow();
    })
  })

  describe('decrease', () => {
    it('is expected to decrease the temp by 1', () => {
      thermostat.decrease();
      expect(thermostat._temp).toEqual(19);
    })

    it('throws and error if temp is reduced below 10', () => {
      thermostat._temp = 10;
      expect( () => { thermostat.decrease() }).toThrow();
    })
  
  })

  describe('power saving mode on', () => {

    it('if power saving mode is on the max temp is 25', () => {
      thermostat._temp = 25;
      expect( () => { thermostat.increase() }).toThrow();
    })
  })

  describe('reset', () => {
    it('it resets the temp to 20', () => {
      thermostat._temp = 10;
      thermostat.reset();
      expect(thermostat._temp).toEqual(20);
    })
  })

  describe('energy usage', () => {
    it('is expected to return low-usage', () => {
      thermostat._temp = 15;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    })

    it('is expected to return medium-usage', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    })

    it('is expected to return high-usage', () => {
      thermostat._temp = 30;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })
  })


})