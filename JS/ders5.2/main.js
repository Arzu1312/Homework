let date = new Date();
let months = ["January","February","March","April","May","June","July","August","September","October",
"November","December"];

let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

function realTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let AmPm = "";

    AmPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours >= 10 ? hours : '0' + hours;
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = seconds >= 10 ? seconds : '0' + seconds;

    document.querySelector(".month").innerHTML = months[time.getMonth()];
    document.querySelector(".day").innerHTML = days[time.getDay()];
    document.querySelector(".date").innerHTML = time.getDate();
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;
    document.querySelector(".ampm").innerHTML = AmPm;

}

let final_time = setInterval(realTime, 1000)