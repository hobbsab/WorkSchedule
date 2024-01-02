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
const saveBtn= document.getElementsByClassName("btn saveBtn col-2 col-md-1")
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

// Get the current time
let currentTime = dayjs();

$(".time-block").each(function() {
  let timeBlock = $(this);
  let time = timeBlock.attr("time-block");

  // Compare the time block with the current time
  if (dayjs(time, "hA").isBefore(currentTime, "hour")) {
    // Time block is in the past
    timeBlock.addClass("past");
  } else if (dayjs(time, "hA").isAfter(currentTime, "hour")) {
    // Time block is in the future
    timeBlock.addClass("future");
  } else {
    // Time block is the present
    timeBlock.addClass("present");
  }
});




const hoursArr = document.querySelectorAll('.time-block')
const now = dayjs().format('H')

// color code the squares - done

for (let i = 0; i < hoursArr.length; i++){
    const hour = hoursArr[i].id.substring(5)

    if(now === hour){
        hoursArr[i].setAttribute('class', 'row time-block present')
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




// $(document).ready(function() {
//   // Retrieve saved events from local storage
//   var savedEvents = JSON.parse(localStorage.getItem("events")) || {};

//   // Populate timeblocks with saved events
//   for (var time in savedEvents) {
//     var eventText = savedEvents[time];
//     $("#" + time).val(eventText);
//   }

//   // Attach event listener to save button
//   $(".saveBtn").on("click", function() {
//     var time = $(this).parent().attr("id");
//     var eventText = $(this).siblings(".description").val();

//     // Save event to local storage
//     savedEvents[time] = eventText;
//     localStorage.setItem("events", JSON.stringify(savedEvents));
//   });

//   // Compare current time with time associated with each timeblock
//   var currentTime = dayjs().format("H");

//   $(".time-block").each(function() {
//     var blockTime = parseInt($(this).attr("id"));

//     if (blockTime < currentTime) {
//       $(this).addClass("past");
//     } else if (blockTime === currentTime) {
//       $(this).addClass("present");
//     } else {
//       $(this).addClass("future");
//     }
//   });
// });

console.log('123')

// button1.addEventListener 