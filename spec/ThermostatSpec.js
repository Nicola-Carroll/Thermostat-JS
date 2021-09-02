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
      thermostat.increase()
      expect(thermostat._temp).toEqual(21)
    })
  })

  describe('decrease', () => {
    it('is expected to decrease the temp by 1', () => {
      thermostat.decrease()
      expect(thermostat._temp).toEqual(19)
    })
  })

})