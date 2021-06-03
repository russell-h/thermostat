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

});