const apiKey = "245cd0cc1746376bb72daab5fe3774ce";

const cityInput = document.getElementById("city");
const submit = document.getElementById("submit");

const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels_like");
const temp_min = document.getElementById("temp_min");
const temp_max = document.getElementById("temp_max");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const speed = document.getElementById("speed");
const deg = document.getElementById("deg");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const country = document.getElementById("country");
const timezone = document.getElementById("timezone");
const timezone2 = document.getElementById("timezone2");

// Convert Unix time to local readable time
function formatTime(unix, offset) {
  return new Date((unix + offset) * 1000).toUTCString().match(/(\d{2}:\d{2}:\d{2})/)[0];
}

const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      if (data.cod !== 200) throw new Error("City not found");

      cityName.innerHTML = data.name;

      const main = data.main;
      const wind = data.wind;
      const weather = data.weather[0];
      const sys = data.sys;

      description.innerHTML = data.weather[0].description;
      temp.innerHTML = data.main.temp;
      temp2.innerHTML = data.main.temp;
      feels_like.innerHTML = data.main.feels_like;
      temp_min.innerHTML = data.main.temp_min;
      temp_max.innerHTML = data.main.temp_max;
      humidity.innerHTML = data.main.humidity;
      humidity2.innerHTML = data.main.humidity;
      speed.innerHTML = data.wind.speed;
      deg.innerHTML = data.wind.deg;
      sunrise.innerHTML = formatTime(data.sys.sunrise, data.timezone);
      sunset.innerHTML = formatTime(data.sys.sunset, data.timezone);
      country.innerHTML = data.sys.country;
      timezone.innerHTML = data.timezone + " sec";
      timezone2.innerHTML = data.timezone + " sec";
    })
    .catch((err) => {
      alert("City not found or an error occurred.");
      console.error(err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

//default load
getWeather("Delhi");

// Replace with your real OpenWeatherMap API key
/*const API_KEY = '245cd0cc1746376bb72daab5fe3774ce';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('weatherResult').innerHTML = `
          <div class="card p-3">
            <h4>${data.name}</h4>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          </div>
        `;
      } else {
        document.getElementById('weatherResult').innerHTML = `<div class="alert alert-danger">Error: ${data.message}</div>`;
      }
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<div class="alert alert-danger">Fetch error: ${error.message}</div>`;
    }
  }
  */