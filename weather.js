const apikey = "6ff3f36765fb2d403d39c75ef363d783"
let apiUrl = " "
//DOM elements
const input = document.getElementById('input')
const SearchBtn = document.querySelector('button')
const newCityName = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidty')
const windSpd = document.querySelector('.wind')
const weatherIcon = document.querySelector('.weather-icon')
const backgroundImg = document.querySelector('body')
const celcius = document.querySelector('.temp')


SearchBtn.addEventListener('click', checkWeather);

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkWeather();
    }
});

async function checkWeather() {
    const cityName = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apikey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    newCityName.innerHTML = data.name;
    temp.innerHTML = `${data.main.temp}°C`;
    if(data.main.temp > 35){
        celcius.style.color = 'red'
    }else if(data.main.temp < 0){
        celcius.style.color = 'yellow'
    }else(
        celcius.style.color = 'white'
    )
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpd.innerHTML = `${data.wind.speed}km/hr`;

    // Weather icon and background updates
    if (data.weather[0].main == "Rain") {
        weatherIcon.setAttribute('src', 'images/rain.png');
        backgroundImg.style.backgroundImage = 'url(images/RainyDay.jpg)';
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.setAttribute('src', 'images/clouds.png');
        backgroundImg.style.backgroundImage = 'url(images/CloudyDay.jpg)';
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.setAttribute('src', 'images/clear.png');
        backgroundImg.style.backgroundImage = 'url(images/ClearyDay.jpg)';
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.setAttribute('src', 'images/snow.png');
        backgroundImg.style.backgroundImage = 'url(images/SnowyDay.jpg)';
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.setAttribute('src', 'images/mist.png');
        backgroundImg.style.backgroundImage = 'url(images/MistyDay.jpg)';
    }
}




// console.log(data.main.temp) -temperature
// console.log(data.main.humidity) - humidity
// console.log(data.wind.speed) - wind speed
// console.log(data.weather[0].main) - rain or clouds
// console.log(data.name) - city name
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

























// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

