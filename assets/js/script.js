$(function () {
  // Variables
  var saveBtnEl = $('.saveBtn');
  var timeBlockEl = $('.time-block');
  var currentHour = dayjs().hour();
  var today = dayjs();
  console.log(currentHour);

  //display the current date
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // save div id and textarea input to local storage on click
  saveBtnEl.on('click', function () {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('textarea').val()
    
    localStorage.setItem(timeBlockId, userInput);
  });

  // apply past, present, or future class depending on current time
  function applyTime() {
    timeBlockEl.each(function() {
      var timeAttr = parseInt($(this).attr('time'));
      if (timeAttr < currentHour) {
        $(this).addClass('past');
      } else if (timeAttr === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  }
  
  // get user input from local storage and display it to the corresponding time-block
  function init() {
    timeBlockEl.each(function() {
      var storedValue = localStorage.getItem($(this).attr('id'));
      var textarea = $(this).find('textarea');
      
      if (storedValue !== null) {
        textarea.val(storedValue);
      }
    });
  }


  //call functions
  init();
  applyTime();
});
