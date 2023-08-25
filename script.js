// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

// in the html.
let today = dayjs()
let hour = today.format('HH');
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

// Display Current date
function start(){
    setInterval(function () {
        let currentTime  = dayjs().format('MMM D, YYYY, hh:mm a')
        $('#currentDate').text(currentTime);
    }, 1000);
  };
  start ()

  //save button adding to local storage
  $(".saveBtn").on('click', function () {
    var description = $(this).siblings('.description').val()
    var timeBlock = $(this).parent().attr('id')
    localStorage.setItem(timeBlock, description);
});

// retrieve items from local storage
$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))


//compare hour blocks with current time to add correct classes - 1. loop over all hours, 2. get id to compare, 3/4. compare timeId to current and apply classes accordingly

const hourBlock = $('.tableContainer').children('div');
  for (let i = 0; i < hourBlock.length; i++) {
    let timeId = $(hourBlock[i]).attr('id').split('-')[1];
    console.log(timeId)
    console.log(hour)
    if (timeId < hour) {
      $(hourBlock[i]).addClass('past');
    } else if (timeId == hour) {
      $(hourBlock[i]).addClass('present');
    } else {
      $(hourBlock[i]).addClass('future');
    }
}

});