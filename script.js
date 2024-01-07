"use strict";

const secondPointer = document.getElementById("second");
const minutePointer = document.getElementById("minute");
const hourPointer = document.getElementById("hour");

const secondText = document.getElementById("d__second");
const minuteText = document.getElementById("d__minute");
const hourText = document.getElementById("d__hour");


const clock = () => {
    const time = new Date();

    console.log('${time.getHours()]: ${time.getMinutes ()] : ${time. getseconds ()}')

    secondText.innerText= String(time.getseconds()).padstart(2,0); 
    minuteText.innerText= String(time.getMinutes()).padstart(2,0); 
    hourText.innerText= String (time.getHours()).padstart(2,0);


    hourPointer.style.transform = `rotate(${(time. gethours () % 12) * 30 + time. getMinutes () /2}deg`;

    minutePointer.style.transform=`rotate(${time.getMinutes() * 6}deg)`;
    secondPointer.style.transform=`rotate(${time.getMinutes() * 6}deg)`;


}

clock();
setInterval(clock, 1000)