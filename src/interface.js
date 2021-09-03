document.addEventListener('DOMContentLoaded', () => {
  const thermo = new Thermostat();

  const updateTemperature = () => {
    document.querySelector('#display_temp').innerText = thermo.temp;
  }

  const updateUsage = () => {
    document.querySelector('#display_temp').className = thermo.energyUsage();
  }

  updateTemperature()
  updateUsage()
  document.querySelector('#display_powersaving_mode').innerText = "On"


  document.querySelector('#increase').addEventListener("click", () => {
    thermo.increase()

    updateTemperature()
    updateUsage()
  });

  document.querySelector('#decrease').addEventListener("click", () => {
    thermo.decrease()

    updateTemperature()
    updateUsage()
  });

  document.querySelector('#reset').addEventListener("click", () => {
    thermo.reset()

    updateTemperature()
    updateUsage()
  });


  document.querySelector('#powersaving').addEventListener("click", () => {
    thermo.powerSavingSwitch()
    const status = thermo.powerSavingOn ? "On" : "Off"

    document.querySelector('#display_powersaving_mode').innerText = status
  });




});