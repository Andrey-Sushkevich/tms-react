
const key = '655a43963e10f7912c7753d920fc8f68';

async function Weather({city, country}){

    const response = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query="${city} ${country}"`);
    const data = await response.json();
    const { temperature,cloudcover, weather_descriptions, humidity, wind_dir, wind_speed, pressure,observation_time,uv_index} = data.current;
   
    const { query } = data.request;
    console.log(query);
    console.log(data);
    /*
    const { weather_icons} = data.weather_icons;
    document.querySelector(".icon").innerHTML = `icon: ${weather_icons}`;*/
    
    document.querySelector(".temperature").innerHTML= temperature;
    document.querySelector(".timezone").innerHTML = query;
    document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}`;
    document.querySelector(".temperature-degree").innerHTML = `Feels like: ${temperature}`;
    document.querySelector(".realfeel").innerHTML = `Today is ${weather_descriptions}`;
    document.querySelector(".wind--direction").innerHTML = `Wind direction: ${wind_dir}`;
    document.querySelector(".wind--speed").innerHTML = `Wind Speed: ${wind_speed}`;
    document.querySelector(".pressure").innerHTML = `Pressure: ${pressure}`;
    document.querySelector(".cloudcover").innerHTML = `Cloudcover: ${cloudcover}`;
    document.querySelector(".observation-time").innerHTML = `Observation-time: ${observation_time}`;
    document.querySelector(".Uv-index").innerHTML = `Uv-index: ${uv_index}`;
}

   document.getElementById("btn").addEventListener("click",  function() {
    Weather({
    city: document.getElementById("wrapper--form--input--city").value,
    country: document.getElementById("wrapper--form--input--city").value
});
})