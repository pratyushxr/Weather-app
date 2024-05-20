document.addEventListener("DOMContentLoaded", function () {
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const key = "97ed86b99fdcf738c7a080e0fa9fde20";

    const temp = document.querySelector(".temp");
    const cityname = document.querySelector(".cityname");
    const searchBtn = document.querySelector(".searchbtn");
    const subBtn = document.querySelector(".subBtn"); // Corrected class name here
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector("#wind");

    console.log(temp); 

    subBtn.addEventListener("click", () => {
        let city = searchBtn.value;
        console.log(city);
        checkWeather(city);
    });

    async function checkWeather(cityarg) {
        try {
            let response = await fetch(url + cityarg + "&appid=" + key);
            let data = await response.json();

            if (data.cod === 200) { // Check if the response is successful
                cityname.innerHTML = data.name + ", " + data.sys.country;
                temp.innerHTML = Math.round(data.main.temp) + "°C"; // Corrected temperature display
                humidity.innerHTML = "Humidity: " + Math.round(data.main.humidity) + "%";
                wind.innerHTML = "Wind Speed: " + data.wind.speed + " km/h";
            } else {
                console.log("City not found");
                cityname.innerHTML = "City not found";
                temp.innerHTML = "";
                humidity.innerHTML = "";
                wind.innerHTML = "";
            }
        } catch (e) {
            console.log("Error: " + e);
        }
    }
});
