import clearimg from './assets/clear.png';
import snowimg from './assets/snow.png';
import cloudimg from './assets/cloud.png';
import mistimg from './assets/mist.png';
import rainimg from './assets/rain.png';
import error404img from './assets/404.png';

function wther(){

    const api_key='334b9630a83366a3a38b39aa58e7390d';
    const weathercont = document.querySelector(".weather-cont");
    const weatherdetails = document.querySelector(".weather-details");
    const error404 = document.querySelector(".not-found");
    const app = document.querySelector('.App');
    var city = document.querySelector(".getcity-input").value;
    const cityname = document.querySelector(".cityname");
    var limk=``;

    if(city.length===0){
        async function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
              console.log("Geolocation is not supported by this browser. Please update your browser or try another.");
            }
        }
        function showPosition(position) {
            var latu=position.coords.latitude;
            var longu=position.coords.longitude;
            limk=`https://api.openweathermap.org/data/2.5/weather?lat=${latu}&lon=${longu}&units=metric&appid=${api_key}`
            // console.log("Latitude: " + latu + 
            // " Longitude: " + longu);
            // console.log("Link: "+limk);
            
            fetch(limk)
            .then(response=>response.json())
            .then(json=>{
            // console.log("Name: "+json.name);
            if (json.cod==='404'){
                error404.style.visibility = 'visible';
                error404.classList.add('Fadin');
                app.style.height = '300px';
                error404.style.display = 'block';
                weathercont.style.display = 'none';
                weatherdetails.style.display = 'none';
                return;
            }
            else if(json.cod==='400'){
                console.log("Bad Request");
                return;
            }
            else{
                error404.classList.remove('Fadin');
                error404.style.display = 'none';
                weathercont.style.display = 'block';
                weatherdetails.style.display = 'flex';
                cityname.style.display = 'block';
                
                const weatherimg = document.querySelector(".clear-sky");
                const temp = document.querySelector(".Temp");
                const des = document.querySelector(".Des");
                const humidity = document.querySelector(".h-details span");
                const wind = document.querySelector(".w-details span");
                // console.log(json.weather);

                switch (json.weather[0].main) {
                    case 'Clear':
                        weatherimg.src = clearimg;
                        weatherimg.classList.add('romtamte');
                        break;
                    case 'Snow':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = snowimg;
                        break;
                    case 'Rain':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = rainimg;
                        break;
                    case 'Mist':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = mistimg;
                        break;
                    case 'Smoke':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = mistimg;
                        break;  
                    case 'Haze':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = mistimg;
                        break;
                    case 'Clouds':
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = cloudimg;
                        break;
                    default:
                        weatherimg.classList.remove('romtamte');
                        weatherimg.src = error404img;
                        break;
                }

                cityname.innerHTML = `${json.name}`;
                temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                des.innerHTML = `${json.weather[0]["description"]}`;
                humidity.innerHTML = `${parseInt(json.main.humidity)}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
                app.style.height = '500px';
            }
        })
        }
        getLocation();
    }
    else{
        limk=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
        fetch(limk)
        .then(response=>response.json())
        .then(json=>{
        // console.log("Link: "+limk);
        // console.log("Name: "+json.name);
        if (json.cod==='404'){
            error404.style.visibility = 'visible';
            error404.classList.add('Fadin');
            app.style.height = '300px';
            error404.style.display = 'block';
            weathercont.style.display = 'none';
            weatherdetails.style.display = 'none';
            cityname.style.display = 'none';
            return;
        }
        else if(json.cod==='400'){
            console.log("Bad Request");
            return;
        }
        else{
            error404.classList.remove('Fadin');
            error404.style.display = 'none';
            weathercont.style.display = 'block';
            weatherdetails.style.display = 'flex';
            cityname.style.display = 'block';
            
            
            const weatherimg = document.querySelector(".clear-sky");
            const temp = document.querySelector(".Temp");
            const des = document.querySelector(".Des");
            const humidity = document.querySelector(".h-details span");
            const wind = document.querySelector(".w-details span");
            // console.log(json.weather);
            switch (json.weather[0].main) {
                case 'Clear':
                    weatherimg.src = clearimg;
                    weatherimg.classList.add('romtamte');
                    break;
                case 'Snow':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = snowimg;
                    break;
                case 'Rain':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = rainimg;
                    break;
                case 'Mist':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = mistimg;
                    break;
                case 'Smoke':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = mistimg;
                    break;  
                case 'Haze':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = mistimg;
                    break;
                case 'Clouds':
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = cloudimg;
                    break;
                default:
                    weatherimg.classList.remove('romtamte');
                    weatherimg.src = error404img;
                    break;
            }
            
            cityname.innerHTML = `${json.name}`;
            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            des.innerHTML = `${json.weather[0]["description"]}`;
            humidity.innerHTML = `${parseInt(json.main.humidity)}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
            app.style.height = '500px';
        }
        })
    }
    cityname.onclick = () => {
        var charturl="https://nikgautamgithub.github.io/WeatherReport"
        window.location.href = charturl;
        // // Wait for the page to fully load
        // window.addEventListener('load', function() {
        //   setTimeout(function() {
        //     var queryParams = new URLSearchParams(window.location.search);
        //     var datu = queryParams.get("data");
        //     console.log(datu);
      
        //     // Get the input field
        //     var cityname2 = document.getElementById("input-city");
        //     cityname2.focus();
        //     // Check if the input field exists before setting its value
        //     if (cityname2) {
        //       cityname2.value = datu;
        //       console.log("done.");
        //     }console.log("huehue not found!");
        //   }, 5000);
        // });
      };
      
}
    
export default wther;