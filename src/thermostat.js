class Thermostat {
 constructor() {
   this.MINIMUM_TEMPERATURE = 10;
   this.temperature = 20;
 }
  getCurrentTemperature() {
    return this.temperature
  }

  upTemperature(){
    this.temperature += 1
  }

  downTemperature() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
}

isMinimumTemperature() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

}