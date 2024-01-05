// work schedule
// date
function getCurrentDay() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return formattedDate;
}
const currentDate = getCurrentDay();
const dateElement= document.getElementById("currentDay")
const timeBlock= document.getElementsByClassName("time-block")
const saveBtn= document.getElementsByClassName("saveBtn")
dateElement.innerHTML = currentDate;


// Get the HTML element
const clockElement = document.getElementById('currentTime');

// time
function updateClock() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  clockElement.textContent = formattedTime;
}
// update the time every second
setInterval(updateClock, 1000);

const hoursArr = document.querySelectorAll('.time-block')
const now = dayjs().hour()
console.log (hoursArr)

// color code the time blocks
for (let i = 0; i < hoursArr.length; i++){
    const hour = parseInt (hoursArr[i].id.substring(5))
    if(now === hour){
      hoursArr[i].setAttribute('class', 'row time-block present')
    }
    else if (now > hour){
      hoursArr[i].setAttribute('class', 'row time-block past')
    }
    else {
      hoursArr[i].setAttribute('class', 'row time-block future')
    }
}

// save data to local storage

const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    const clickHandler = () => {
        const text = textAreaArr[i].value;
        localStorage.setItem(i, text)
    }

    buttonArr[i].addEventListener('click', clickHandler)
}


$(document).ready(function() {
  var savedEvents = JSON.parse(localStorage.getItem("events")) || {};
  for (var time in savedEvents) {
    var eventText = savedEvents[time];
    $("#" + time + " .description").val(eventText);
  }
  // event listener for savebtn
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    // save to local storage
    savedEvents[time] = eventText;
    localStorage.setItem("events", JSON.stringify(savedEvents));
    })
  });

console.log('123')