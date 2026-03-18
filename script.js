<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Weather App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      color: #fff;
      margin: 0;
      padding: 0;
    }
    .container {
      margin-top: 100px;
    }
    input {
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
    }
    .weather {
      margin-top: 20px;
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Live Weather App</h1>
    <input type="text" id="city" placeholder="Enter city name">
    <button onclick="getWeather()">Get Weather</button>
    <div class="weather" id="weather"></div>
  </div>

  <script>
    async function getWeather() {
      const city = document.getElementById("city").value;
      const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          const temp = data.main.temp;
          const humidity = data.main.humidity;
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;

          document.getElementById("weather").innerHTML = `
            <p><strong>${city}</strong></p>
            <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon"></p>
            <p>Temperature: ${temp}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Condition: ${description}</p>
          `;
        } else {
          document.getElementById("weather").innerHTML = "City not found.";
        }
      } catch (error) {
        document.getElementById("weather").innerHTML = "Error fetching data.";
      }
    }
  </script>
</body>
</html>
