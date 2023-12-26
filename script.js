const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  // console.log(event.target.name);

  // + before the event.target.value ensures it is always a number and not a string.
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.15).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.15).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
