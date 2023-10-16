const apiKey = "2f2eaa1be483156e55da95e2928521a8";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather-img");
async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (reponse.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await reponse.json();
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "img/rain.png";
        } else if (data.weather[0].main == "Dizzle") {
            weatherImg.src = "img/dizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});
