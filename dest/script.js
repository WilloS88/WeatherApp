"use strict";
const apiKey = "5a70a05133bd4ed7bc2221529240102";
const cityName = "Zlín";
const days = 3;
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`;
fetch(url)
    .then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
    .then((data) => {
    console.log(data);
    console.log(data.forecast.forecastday[0].day.maxtemp_c);
    console.log(data.forecast.forecastday[0].day.mintemp_c);
})
    .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
});
