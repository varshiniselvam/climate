<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Weather App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>🌦 Live Weather App</h1>
  </header>

  <main>
    <p>Type a city name to see live weather updates:</p>
    <input type="text" id="cityInput" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>

    <div class="weather" id="weatherResult"></div>
  </main>

  <footer>
    <p>&copy; 2026 Live Weather App</p>
  </footer>

  <script>
    async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Condition: ${data.weather[0].description}</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>📍 Coordinates: [${data.coord.lat}, ${data.coord.lon}]</p>
          `;
        } else {
          document.getElementById("weatherResult").innerHTML = `<p>City not found. Try again.</p>`;
        }
      } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
      }
    }
  </script>
</body>
</html>
