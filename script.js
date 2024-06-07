//  https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=b2ccab3a41e8a9d56176ac237836d271&units=metric

const apiKey = "b2ccab3a41e8a9d56176ac237836d271";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchWord = document.querySelector(".search-box");
const searchBtn = document.querySelector(".btn");
const tempIcon = document.querySelector(".temp-icon");
const weatherBlock = document.querySelector(".weather");
const invalid = document.querySelector(".invalid");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    invalid.style.display = "block";
    weatherBlock.style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      tempIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      tempIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      tempIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      tempIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      tempIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      tempIcon.src = "images/snow.png";
    }
    invalid.style.display = "none";
    weatherBlock.style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchWord.value);
});
