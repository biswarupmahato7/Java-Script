let hourEle = document.querySelector('.hour')
let minEle = document.querySelector('.min')
const secEle = document.querySelector('.sec')
let amPmEle = document.querySelector('.amOrPm')


function myClock(){
  const myDate = new Date();
console.log(myDate.toString())
console.log(myDate)

let hour = myDate.getHours();
let min = myDate.getMinutes();
let sec = myDate.getSeconds();

const amPm = hour>=12 ?'PM':'AM'

hour = hour %12; 
hour = hour? hour:12 // Replace '0' hour with '12' for 12-hour format


  // Update elements with leading zeros for single digits
hourEle.innerText = hour.toString().padStart(2,'0');
minEle.innerText = min.toString().padStart(2,'0');
secEle.innerText = sec.toString().padStart(2,'0');
amPmEle.innerText = amPm

}

myClock()
setInterval(myClock,1000)

