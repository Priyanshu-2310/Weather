let search = document.getElementById('search');
let mainbox = document.querySelector('.centercard')
let cityvalue = document.getElementById('city')
let celcius = document.getElementById('display');
let humiditymain = document.getElementById('humidity')
let windmain = document.getElementById('wind');
let footer = document.getElementById('footer')
const API_KEY="2838938bc7871d8ec43c74af25b47d61";
let wimg = document.getElementById('weatherimg')
let imgbox = document.getElementById('imgbox')
let result;


search.addEventListener('click',function(event){
    event.preventDefault()
    let city = cityvalue.value;
    console.log(city);
  
    if(city == ''){
        Swal.fire("Enter The City Name!");
    }
    else{
    
    const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url, true);
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText)
            let result=JSON.parse(this.responseText);
            console.log(result);
            show(result);
        }
    }

    xhr.send();
    }

        
    

})

function show(result){
    mainbox.style.height = "550px";
    mainbox.style.justifyContent = "start";
    
    let temp = result.main.temp-273.15;
    let humidity = result.main.humidity;
    let wind = result.wind.speed;
    console.log(humidity);
    temp = parseInt(temp)
    celcius.innerHTML = temp+"°C"
    humiditymain.innerHTML = "Humidity: "+humidity+"%"
    windmain.innerHTML = "Wind Speed: "+wind+"m/s";

    footer.style.display = "flex"
    if(temp<24){
        wimg.src = "./image/snow.png";
        imgbox.style.display = "flex";

    }
    else if(temp>24 && temp<28){
        wimg.src = "./image/clear.png";
        imgbox.style.display = "flex";
    }
    else if(temp > 28){
        wimg.src = "./image/sun.png";
        imgbox.style.display = "flex";
    }
    
}