(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/404.a1b946b7.png"},,,function(e,a,t){e.exports=t.p+"static/media/mist.9709df31.png"},,,function(e,a,t){e.exports=t.p+"static/media/clear.97ee77b1.png"},function(e,a,t){e.exports=t.p+"static/media/snow.2a1f869a.png"},function(e,a,t){e.exports=t.p+"static/media/cloud.08225153.png"},function(e,a,t){e.exports=t.p+"static/media/rain.4789ada3.png"},function(e,a,t){e.exports=t(25)},,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(7),l=t.n(s),r=(t(21),t(23),t(8)),i=t.n(r),o=t(9),m=t.n(o),d=t(10),p=t.n(d),u=t(5),y=t.n(u),E=t(11),h=t.n(E),v=t(2),f=t.n(v);var w=function(){var e=document.querySelector(".weather-cont"),a=document.querySelector(".weather-details"),t=document.querySelector(".not-found"),n=document.querySelector(".App"),c=document.querySelector(".getcity-input").value;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=").concat("334b9630a83366a3a38b39aa58e7390d")).then(function(e){return e.json()}).then(function(c){if("404"===c.cod)return t.style.visibility="visible",t.classList.add("Fadin"),n.style.height="300px",t.style.display="block",e.style.display="none",void(a.style.display="none");if("400"!==c.cod){t.classList.remove("Fadin"),t.style.display="none",e.style.display="block",a.style.display="flex";var s=document.querySelector(".clear-sky"),l=document.querySelector(".Temp"),r=document.querySelector(".Des"),o=document.querySelector(".h-details span"),d=document.querySelector(".w-details span");switch(console.log(c.weather),c.weather[0].main){case"Clear":s.classList.add("romtamte"),s.src=i.a;break;case"Snow":s.classList.remove("romtamte"),s.src=m.a;break;case"Rain":s.classList.remove("romtamte"),s.src=h.a;break;case"Mist":case"Smoke":s.classList.remove("romtamte"),s.src=y.a;break;case"Clouds":s.classList.remove("romtamte"),s.src=p.a;break;default:s.classList.remove("romtamte"),s.src=f.a}l.innerHTML="".concat(parseInt(c.main.temp),"<span>\xb0C</span>"),r.innerHTML="".concat(c.weather[0].description),o.innerHTML="".concat(parseInt(c.main.humidity),"%"),d.innerHTML="".concat(parseInt(c.wind.speed),"km/h"),n.style.height="500px"}else console.log(console.clear())})},b=t(3),N=t(4);var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"search-bar"},c.a.createElement("p",{className:"Locate-icon"},c.a.createElement(b.a,null)),c.a.createElement("input",{className:"getcity-input",type:"text",placeholder:"Enter your location"}),c.a.createElement("button",{onClick:w,className:"Find-icon"},c.a.createElement(b.b,null))),c.a.createElement("div",{className:"not-found"},c.a.createElement("img",{src:f.a,alt:""}),c.a.createElement("p",null,"Oops! Try Another Location :/")),c.a.createElement("div",{className:"weather-cont"},c.a.createElement("img",{src:"",alt:"...",className:"clear-sky romtamte"}),c.a.createElement("p",{className:"Temp"}),c.a.createElement("p",{className:"Des"})),c.a.createElement("div",{className:"weather-details"},c.a.createElement("div",{className:"humidity"},c.a.createElement("p",{className:"humidity-icon"},c.a.createElement(N.a,null)),c.a.createElement("div",{className:"h-details"},c.a.createElement("span",null),c.a.createElement("p",null,"Humidity"))),c.a.createElement("div",{className:"wind"},c.a.createElement("p",{className:"wind-icon"},c.a.createElement(N.b,null)),c.a.createElement("div",{className:"w-details"},c.a.createElement("span",null),c.a.createElement("p",null,"Wind Speed")))))))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)))}],[[12,2,1]]]);
//# sourceMappingURL=main.3d60e14b.chunk.js.map