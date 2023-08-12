// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // gets id of parent element on click
  var saveBtnEl = $('.saveBtn');
  saveBtnEl.on('click', function () {
    var timeBlockVal = $(this).parent().attr('id');
    console.log(timeBlockVal);
    return timeBlockVal;
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
//  var hourNine = $('#hour-9').data('9');

// applies past,present, or future class depending on time
 var currentHour = dayjs().hour();
 console.log(currentHour);
 var timeBlockEl = $('.time-block');

 function applyTime () {
  if (timeBlockEl.attr('time') <= currentHour) {
    timeBlockEl.addClass('past');
  } else if (timeBlockEl.attr('time') === currentHour) {
    timeBlockEl.addClass('present');
  } else {
    timeBlockEl.addClass('future');
  }
 };
 applyTime();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //displays the current date
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
