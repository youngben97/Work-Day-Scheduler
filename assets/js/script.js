// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // saves time-block id and textarea input to local storage on click
  var saveBtnEl = $('.saveBtn');
  saveBtnEl.on('click', function () {
    var timeBlockData = {
      timeBlockId: $(this).parent().attr('id'),
      userInput: $(this).siblings('textarea').val()
    }
    localStorage.setItem(`${timeBlockData.timeBlockId}`, JSON.stringify(timeBlockData));
  })

// applies past,present, or future class depending on time
 var currentHour = dayjs().hour();
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
  //local storage set item

  //displays the current date
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
