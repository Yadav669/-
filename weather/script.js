const apiKey = "53f6d06b9e8a36021a55b547de717465";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".icon")
async function checkWeather(city){
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json()
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
        icon.src = "../weather/weather-app-img/"
    }else if(data.weather[0].main == "Clear"){
        icon.src = "../weather/weather-app-img/images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        icon.src = "../weather/weather-app-img/images/snow.png"
    }else if(data.weather[0].main == "Drizzle"){
        icon.src = "../weather/weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        icon.src = "../weather/weather-app-img/images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
searchbtn.addEventListener("click",() => {
    checkWeather(search.value);
})