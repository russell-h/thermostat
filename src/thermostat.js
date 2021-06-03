class Thermostat {
 constructor() {
   this.temperature = 20
 }
  getCurrentTemperature() {
    return this.temperature
  }

  upTemperature(){
    this.temperature += 1
    
  }

  downTemperature() {
    this.temperature -= 1
  }
}