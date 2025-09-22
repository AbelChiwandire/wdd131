document.addEventListener('DOMContentLoaded', () => {
  const temperature = 25;  // °C
  const windSpeed = 10;     // km/h

  function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
  }

  const windChillElement = document.getElementById('windchill');

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1);
    windChillElement.textContent = `${windChillValue} °C`;
  } else {
    windChillElement.textContent = 'N/A';
  }
});


