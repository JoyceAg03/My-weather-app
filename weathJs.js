function changeWeather(weather) {
  let CTValue = document.querySelector(".current-temperature-value");
  let Hmd = document.querySelector(".Hmd");
  let wnd = document.querySelector(".wnd");
  let HmdFR = weather.data.temperature.humidity;
  let wndFR = weather.data.wind.speed;
  let tempFR = Math.round(weather.data.temperature.current);
  CTValue.innerHTML = tempFR;
  Hmd.innerHTML = HmdFR;
  wnd.innerHTML = wndFR;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "f7adca40001ee290ebo0256t3f3a0dba";
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(changeWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
