// let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// let key = "&appid=0318b21fe0c0ad7d4d2c4c74d1e7df49";


// let temp = document.querySelector(".temp");
// let cityname = document.querySelector(".cityname");
// let searchBtn = document.querySelector(".searchbtn");
// let subBtn = document.querySelector("button");
// let humidity = document.querySelector(".humidity");
// let wind = document.querySelector("#wind");

// console.log(temp); 

// subBtn.addEventListener("click", () => {
//   city = searchBtn.value;
//   console.log(city);
  
//   return checkWeather(city);
// });

// async function checkWeather(cityarg) {
//   try {
//     let data = await fetch(url + cityarg + key);
//     let res = await data.json();
//     result = res;
//     cityname.innerHTML = cityarg;
//     console.log(result);
//     temp.innerHTML = Math.round(result.main.temp) + "`o C";
//     humidity.innerHTML = Math.round(result.main.humidity) + "%";
//     wind.innerHTML = (result.wind.speed + " km/h");

//   } catch (e) {
//     console.log("Error" + e);
//   };
// };

// checkWeather();



let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let key = "&appid=0318b21fe0c0ad7d4d2c4c74d1e7df49";

let temp = document.querySelector(".temp");
let cityname = document.querySelector(".cityname");
let searchBtn = document.querySelector(".searchbtn");
let subBtn = document.querySelector(".subBtn");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector("#wind");

console.log(temp); 

subBtn.addEventListener("click", () => {
  let city = searchBtn.value;
  console.log(city);
  
  checkWeather(city);
});

async function checkWeather(cityarg) {
  try {
    let response = await fetch(url + cityarg + key);
    let data = await response.json();
    
    if (data.cod === 200) { // Check if the response is successful
      cityname.innerHTML = cityarg;
      temp.innerHTML = Math.round(data.main.temp) + "°C";
      humidity.innerHTML = Math.round(data.main.humidity) + "%";
      wind.innerHTML = data.wind.speed + " km/h";
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

// checkWeather(); // Uncomment if you want to call the function on page load with a default city
