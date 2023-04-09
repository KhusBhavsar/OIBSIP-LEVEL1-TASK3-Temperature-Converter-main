function openNav() {
  document.getElementById("sidenav").style.width = "50%";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0%";
}



function celsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function celsiusToKelvin() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let kelvin = celsius + 273.15;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  }
  
  function fahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  
  function fahrenheitToKelvin() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let kelvin = (fahrenheit + 459.67) * 5/9;
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  }
  
  function kelvinToCelsius() {
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let celsius = kelvin - 273.15;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  
  function kelvinToFahrenheit() {
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let fahrenheit = kelvin * 9/5 - 459.67;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  