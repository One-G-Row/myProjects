
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBp-ZIDNxV_d8RY7yPgLEzWwEfebsiFe3E",
   authDomain: "diary-9429f.firebaseapp.com",
   databaseURL: "https://diary-9429f-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "diary-9429f",
   storageBucket: "diary-9429f.appspot.com",
   messagingSenderId: "1017057461226",
   appId: "1:1017057461226:web:f3af73c66bd6fba8732893"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const diaryInDB = ref(database, "diary")

let send = document.getElementById("send")
let comment = document.getElementById("comment")


function addElement(){
//get the currentMonth, currentDay and current Year
let date = new Date()
let currentMonth = date.getMonth() + 1
let currentDate = date.getDate() 
let currentYear = date.getFullYear()

//create new element <p> and create text for element <p>
let p = document.createElement("p")
let updateDate = document.createTextNode(`${currentMonth}/${currentDate}/${currentYear}`)
p.appendChild(updateDate)

//append the <p> element below the <h1> element in the <div> element
let container = document.getElementById("container")
let myDiary = document.getElementById("myDiary")
container.insertBefore(p, myDiary)
}
addElement()

send.addEventListener("click", sendInfo)
function sendInfo(){
//push the data in the textarea to the database
let commentValue = comment.value
push(diaryInDB, commentValue)
clearInput()
return alert("data entry is saved")
}

//get the data saved in the database and display it below the send button on the site
onValue(diaryInDB, function (snapshot){
let diaryArray = Object.entries(snapshot.val())

for(let i=0; i<diaryArray.length; i++){
    let currentDiary = diaryArray[i]
    let currentDiaryID = currentDiary[0]
    let currentDiaryValue = currentDiary[1]

    //append the <li> element in the <ul> element and save data from the database in the <li> element
    const container = document.getElementById("container")
    const diaryList = document.getElementById("diaryList")
    const list = document.createElement("li")
    const display = document.getElementById("display")

    let diaryValue = document.createTextNode(`${currentDiaryValue}`)
    list.appendChild(diaryValue)
    container.insertBefore(list, diaryList)
    list.textContent = `${currentDiaryValue}`
    //clearDiaryList()
}

})

function clearDiaryList(){
    currentDiaryValue = ""
}

function clearInput(){
   //clear textarea input
   comment.value = ""
}
