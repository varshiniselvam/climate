<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Climate App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #e0f7fa;
      text-align: center;
      padding: 2rem;
    }
    input {
      padding: 0.5rem;
      margin: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      padding: 0.5rem 1rem;
      background: #00796b;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #004d40;
    }
    .weather {
      margin-top: 2rem;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>🌍 Climate App</h1>
  <p>Enter a city to check the current weather:</p>
  
  <input type="text" id="cityInput" placeholder="Enter city name">
  <button onclick="getWeather()">Get Weather</button>
  
  <div class="weather" id="weatherResult"></div>

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
