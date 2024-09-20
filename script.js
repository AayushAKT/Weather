let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search i');
let image = document.querySelector('.weather-image');
let weatherType = document.querySelector('.weather-type');


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=3f662cadb9f71a5054c2a182f3765320&units=metric&q="

async function getWeather(city){
    const response = await fetch(apiUrl + city);
    const data = await response.json();

    console.log(data);

    if(data.cod == 404)
        alert("Invalid city name!")

     document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C'
     document.querySelector('.cityName').innerHTML = data.name;
     document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
     document.querySelector('.windSpeed').innerHTML = data.wind.speed + 'km/h';
     document.querySelector('.weather-type').innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        image.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        image.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        image.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist" || data.weather[0].main == "Fog")
    {
        image.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle" || data.weather[0].main == "Haze")
    {
        image.src = "images/drizzle.png";
    }
}


searchBtn.addEventListener('click',()=>{
    getWeather(searchBox.value);
})

searchBox.addEventListener('keyup',(e=>{
    if(e.keyCode === 13){
        getWeather(searchBox.value)
    }
}))




