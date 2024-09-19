

const urlParam= new URLSearchParams(window.location.search)
const country=urlParam.get("country")
getweather()
function getweather(){
    axios.get(`http://api.weatherstack.com/current?access_key=c5ff666d28c1b2d35cb52c1cd214a3bb&query=${country}`)
    
    .then((response)=>{
        
        let location=response.data.location
        let current=response.data.current
        let isDay=""
        if(current.is_day=="no"){
            isDay="Night"
        }else{
            isDay="Day"
        }
        let img=document.getElementById("icon-temperature")
        let srcImg=""
        let status= document.getElementById("h1-status")
        status=""
        if(current.temperature<20){
            srcImg= img.src="images/rainy.png"
            status="Cold"
        }else if(current.temperature>=20 && current.temperature<26){
            srcImg = img.src="images/cloudy.png"
            status="Moderate"
        }else{
            srcImg=img.src="images/sunny.png"
            status="Sunny"
        }
        document.getElementById("contenaire").innerHTML=""
        let content=`
        <div class="contenair" id="contenaire">
            <div class="top" style="display: flex; justify-content: space-around; align-items: center; margin-top: 20px; ">
                <div class="location">
                    <h1>
                        ${location.name} / ${location.country} <br>
                        <span class="lat-lon">${location.lat}-${location.lon}</span>
                    </h1>
                    <p class="p-location">${location.localtime}</p>
                </div>  
                <div class="temperature">
                    <div style="display: flex; justify-content: flex-start;">
                        <h1>${current.temperature} °C</h1>
                        <img src="${srcImg}" id="icon-temperature" style="width: 75px; height: 75px; margin-left: 20px;" alt="">
                    </div> 
                    <h1 id="h1-status">${status}</h1>
                </div>
            </div>  
            <div class="up">
            <div class="bottom" style="display: flex; justify-content: space-around; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <img src="images/wind.png" style="width: 100px; height: 100px;" alt="">
                    <h2 style="text-align: center;">wind  ${current.wind_speed} km/h <br> ${current.wind_dir} </h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/rain.png" style="width: 100px; height: 100px;" alt="">
                    <h2>Rain : ${current.precip}% </h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/Humidity.png" style="width: 50px; height: 50px;" alt="">
                    <h2>Humidity : ${current.humidity}%</h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/CloudCover.png" style="width: 50px; height: 50px;" alt="">
                    <h2>Cloud Cover  ${current.cloudcover}% </h2> 
                </div>
                <div>
                
                    <h2>${isDay} </h2>
                </div>
            </div>    
            </div>
        </div>
        
        
        
        
        `
        document.getElementById("contenaire").innerHTML+=content
    })
}



function getweatherSearch(){
    let search=document.getElementById("search").value
    axios.get(`http://api.weatherstack.com/current?access_key=c5ff666d28c1b2d35cb52c1cd214a3bb&query=${search}`)
    
    .then((response)=>{

        let location=response.data.location
        let current=response.data.current
        let isDay=""
        if(current.is_day=="no"){
            isDay="Night"
        }else{
            isDay="Day"
        }
        let img=document.getElementById("icon-temperature")
        let srcImg=""
        let status= document.getElementById("h1-status")
        status=""
        if(current.temperature<20){
            srcImg= img.src="images/rainy.png"
            status="Cold"
        }else if(current.temperature>=20 && current.temperature<26){
            srcImg = img.src="images/cloudy.png"
            status="Moderate"
        }else{
            srcImg=img.src="images/sunny.png"
            status="Sunny"
        }
        document.getElementById("contenaire").innerHTML=""
        let content=`
        <div class="contenair" id="contenaire">
            <div class="top" style="display: flex; justify-content: space-around; align-items: center; margin-top: 20px; ">
                <div class="location">
                    <h1>
                        ${location.name} / ${location.country} <br>
                        <span class="lat-lon">${location.lat}-${location.lon}</span>
                    </h1>
                    <p class="p-location">${location.localtime}</p>
                </div>  
                <div class="temperature">
                    <div style="display: flex; justify-content: flex-start;">
                        <h1>${current.temperature} °C</h1>
                        <img src="${srcImg}" id="icon-temperature" style="width: 75px; height: 75px; margin-left: 20px;" alt="">
                    </div> 
                    <h1 id="h1-status">${status}</h1>
                </div>
            </div>  
            <div class="up">
            <div class="bottom" style="display: flex; justify-content: space-around; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <img src="images/wind.png" style="width: 100px; height: 100px;" alt="">
                    <h2 style="text-align: center;">wind  ${current.wind_speed} km/h <br> ${current.wind_dir} </h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/rain.png" style="width: 100px; height: 100px;" alt="">
                    <h2>Rain : ${current.precip}% </h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/Humidity.png" style="width: 50px; height: 50px;" alt="">
                    <h2>Humidity : ${current.humidity}%</h2>
                </div>
                <div style="display: flex; align-items: center;">
                    <img src="images/CloudCover.png" style="width: 50px; height: 50px;" alt="">
                    <h2>Cloud Cover  ${current.cloudcover}% </h2> 
                </div>
                <div>
                
                    <h2>${isDay} </h2>
                </div>
            </div>    
            </div>
        </div>
        
        
        
        
        `
        document.getElementById("contenaire").innerHTML+=content
    })
}