// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//get date
function getCurrentDay() {
  // Create a new Date object
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  return formattedDate;
}
const currentDate = getCurrentDay();
const dateElement= document.getElementById("currentDay")
const timeBlock= document.getElementsByClassName("time-block")
const saveBtn= document.getElementsByClassName("saveBtn")
dateElement.innerHTML = currentDate;

$(function () {



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// if (dayjs(time, "hA").isBefore(currentTime, "hour")) {
//   // Time block is in the past
//   timeBlock.addClass("past");
//     } else if (dayjs(time, "hA").isAfter(currentTime, "hour")) {
//       timeBlock.removeClass('past');
//       time.addClass('present');

// Get the current time

// $(".time-block").each(function() {
//   let timeBlock = $(this);
//   let time = timeBlock.attr("time-block");
//   var currentTime = dayjs().format("HH");
//   // Compare the time block with the current time
//   if (dayjs(time, "hA").isBefore(currentTime, "hour")) {
//     // Time block is in the past
//     timeBlock.css('background-color','red');
//   } else if (dayjs(time, "hA").isAfter(currentTime, "hour")) {
//     // Time block is in the future
//     timeBlock.css('background-color','green');
//   } else {
//     // Time block is the present
//     timeBlock.css('background-color','yellow');
//   }
// });





const hoursArr = document.querySelectorAll('.time-block')
const now = dayjs().hour()
console.log (hoursArr)
// color code the squares - done

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

// save data to local storage - done

const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    const clickHandler = () => {
        const text = textAreaArr[i].value;
        localStorage.setItem(i, text)

    }

    buttonArr[i].addEventListener('click', clickHandler)
}


// get data from local storage

// loop

// localStorage.getItem()

//textAreaArr[i].value = whatever came back from local

$(document).ready(function() {
  // Retrieve saved events from local storage
  var savedEvents = JSON.parse(localStorage.getItem("events")) || {};
  // Populate timeblocks with saved events
  for (var time in savedEvents) {
    var eventText = savedEvents[time];
    $("#" + time + " .description").val(eventText);
  }
  // Attach event listener to save button
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    // Save event to local storage
    savedEvents[time] = eventText;
    localStorage.setItem("events", JSON.stringify(savedEvents));
    })
  });

console.log('123')

// button1.addEventListener 