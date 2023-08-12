$(function () {
  // Variables
  var saveBtnEl = $('.saveBtn');
  var timeBlockEl = $('.time-block');
  var currentHour = dayjs().hour();
  var today = dayjs();

  //display the current date
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // save div id and textarea input to local storage on click
  saveBtnEl.on('click', function () {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('textarea').val()
    
    localStorage.setItem(`${timeBlockId}`, userInput);
  });

  // apply past, present, or future class depending on current time
  function applyTime () {
   if (timeBlockEl.attr('time') <= currentHour) {
    timeBlockEl.addClass('past');
   } else if (timeBlockEl.attr('time') === currentHour) {
    timeBlockEl.addClass('present');
   } else {
    timeBlockEl.addClass('future');
   }
  };
  
  //get user input from local storage and display it to the corresponding time-block
  function init () {
    var hourNine = localStorage.getItem('hour-9');
    if (hourNine !== null) {
      $('#hour-9 textarea').val(hourNine);
    };
    var hourTen = localStorage.getItem('hour-10');
    if (hourTen !== null) {
      $('#hour-10 textarea').val(hourTen);
    };
    var hourEleven = localStorage.getItem('hour-11');
    if (hourEleven !== null) {
      $('#hour-11 textarea').val(hourEleven);
    };
    var hourTwelve = localStorage.getItem('hour-12');
    if (hourTwelve !== null) {
      $('#hour-12 textarea').val(hourTwelve);
    };
    var hourThirteen = localStorage.getItem('hour-13');
    if (hourThirteen !== null) {
      $('#hour-13 textarea').val(hourThirteen);
    };
    var hourFourteen = localStorage.getItem('hour-14');
    if (hourFourteen !== null) {
      $('#hour-14 textarea').val(hourFourteen);
    };
    var hourFifteen = localStorage.getItem('hour-15');
    if (hourFifteen !== null) {
      $('#hour-15 textarea').val(hourFifteen);
    };
    var hourSixteen = localStorage.getItem('hour-16');
    if (hourSixteen !== null) {
      $('#hour-16 textarea').val(hourSixteen);
    };
    var hourSeventeen = localStorage.getItem('hour-17');
    if (hourSeventeen !== null) {
      $('#hour-17 textarea').val(hourSeventeen);
    };
  };

  //call functions
  init();
  applyTime();
});
