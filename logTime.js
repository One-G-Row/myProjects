const start = document.getElementById("start-one")
const starts = document.getElementById("starts")
const stop = document.getElementById("stop-one")
const stops = document.getElementById("stops")
const log = document.getElementById("logTime")
const timeTaken = document.getElementById("timeTaken")
const total = document.getElementById("sum-total")
const sum = document.getElementById("sum")


start.addEventListener("click", startBtn)
function startBtn(event){
    let today= new Date()
    let startHours = today.getHours()
    let startMinutes = today.getMinutes()
    let storeMinutes = startMinutes
    let startTime =`${startHours} : ${storeMinutes}`
    event.preventDefault()
   starts.value = startTime //starts is the input field where we display the value of startTime ahen the startBtn is clicked

   /*To be able to access the values of startHours and Minutes, i will store them in local Storage for easy
   retrieval.I will then fetch them using localStorage.getItem to access them later in another function*/

   localStorage.setItem("startTime", startHours) //store the value of startHours in local storage 
   localStorage.setItem("storeMinutes", startMinutes) //store the value of startMinutes in local storage 
}

stop.addEventListener("click", stopBtn);
function stopBtn(e){
    let today= new Date()
    let stopHours = today.getHours() 
    //stopHours = (12 + stopHours) // should i create an if statement(% 24 == 0) to reset the clock at 12 p.m??
    let stopMinutes = today.getMinutes() // should i parse minutes and unshift() add a 0 digit to the beginning of the array for digits
    let holdMinutes = stopMinutes
    let stopTime = `${stopHours} : ${stopMinutes}` // use of literal strings instead of concantenation
    e.preventDefault()
    stops.value = stopTime //stops is the input field where we display the value of stopTime when the stopBtn is clicked

    localStorage.setItem("stopTime", stopHours) //store the value of stopHours in localStorage
    localStorage.setItem("holdMinutes", stopMinutes) ////store the value of stopMinutes in localStorage
}

    function convertToMinutes(){
       /*fetch the values using localStorage.getItem ()from the localStorage to calculate the number of minutes
        taken*/
        let startHour = localStorage.getItem("startTime")
        let stopHour = localStorage.getItem("stopTime")
        let startMinute = localStorage.getItem("storeMinutes")
        let stopMinute = localStorage.getItem("holdMinutes")
        //1.how about i convert the time to milliseconds to calculate the time difference?
        let newMinutesStart = (startHour * 3,600,000) + (startMinute * 60000)
        console.log(newMinutesStart)
        let newMinutesStop = (stopHour * 3,600,000) + (stopMinute * 60000)
        console.log(newMinutesStop)
        //return our values as objects to easily access them in another function - loggedTime()
        return {
            first: newMinutesStart,
            second: newMinutesStop
        }
    }
    
//2. after converting to milliseconds find the difference, then convert to minutes for the output
let myArr = []
log.addEventListener("click", calculateDifference)
function calculateDifference(event){ 
event.preventDefault()
let convertMinutes = convertToMinutes() /*call the function convertToMinutes() ansd save it in a new variable
 convertMinutes to access the values returned in function convertToMinutes()*/
let differenceMinutesStart = convertMinutes.first //save returned datakey object first in a differenceMinutesStart variable
let differenceMinutesStop = convertMinutes.second //save returned datakey object second in a differenceMinutesStop variable
let calculateDifferenceMinutes = Math.abs(differenceMinutesStop - differenceMinutesStart)
let logs = (calculateDifferenceMinutes / (1000 * 60))
myArr.push(logs)
timeTaken.innerHTML += logs
}

//calculates the sum of the time logged in myArr
let theTotal = 0
total.addEventListener("click", sumTotal)
function sumTotal(event){
for(let i = 0; i < myArr.length; i++){
theTotal += myArr[i]
}
//convert minutes > 60 to hours 
if(theTotal > 60){
    return theTotal % 60
}
sum.innerHTML = "Total-time taken:" + " " +theTotal 
theTotal = 0
event.preventDefault()
console.log(theTotal)
}
