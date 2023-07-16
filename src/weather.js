// app.js
const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const weatherData = document.getElementById("weatherData");

// Replace 'YOUR_API_KEY' with your actual weather API key
const apiKey = 'YOUR_API_KEY';
const weatherApiBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location.trim() === "") {
    alert("Please enter a valid location.");
    return;
  }

  getWeatherData(location);
});

function getWeatherData(location) {
  const apiUrl = `${weatherApiBaseUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        displayErrorMessage("Location not found. Please try again.");
      } else {
        displayWeatherData(data);
      }
    })
    .catch(error => {
      displayErrorMessage("Something went wrong. Please try again later.");
    });
}

function displayWeatherData(data) {
  const weatherDescription = data.weather[0].description;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  weatherData.innerHTML = `
    <h3>${data.name}</h3>
    <p>Weather: ${weatherDescription}</p>
    <p>Temperature: ${temperature} °C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
}

function displayErrorMessage(message) {
  weatherData.innerHTML = `<p class="error">${message}</p>`;
}
