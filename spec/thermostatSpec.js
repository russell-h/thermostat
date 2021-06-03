'use strict';

describe('Thermostat', () => {
  
  let thermostat;

beforeEach(() => {
  thermostat = new Thermostat();
});  

it('starts at 20 degrees', () => {
  expect(thermostat.getCurrentTemperature()).toEqual(20);
});

it('increases temperature with an up function', () => {
  thermostat.upTemperature();
  expect(thermostat.getCurrentTemperature()).toEqual(21);
});

it('decreases temperature with a down function', () => {
  thermostat.downTemperature();
  expect(thermostat.getCurrentTemperature()).toEqual(19);
});

it('has a minimum temperature od 10 degrees', () => {
  for (let i = 1; i <= 11; i++) {
    thermostat.downTemperature()
  }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
});

it('power saving mode defaults to on', ()=> {
  expect(thermostat.isPowerSavingModeOn()).toBe (true);

})

it('power saving mode can switch off', ()=> {
  thermostat.switchPowerSavingModeOff();
  expect(thermostat.isPowerSavingModeOn()).toBe (false);

})

it('power saving mode can switch back on', ()=> {
  thermostat.switchPowerSavingModeOn();
  expect(thermostat.isPowerSavingModeOn()).toBe (true);

})




// it('has a default max temperature of 25 degrees', () => {
//   for (let i = 1; i <= 6; i++) {
//     thermostat.upTemperature()
//   }
//   expect(thermostat.getCurrentTemperature()).toEqual(25);

// })


});