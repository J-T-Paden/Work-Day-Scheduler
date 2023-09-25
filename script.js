// display current date at the top of the page, in the #currentDay div
var today = dayjs().format("MMM, D, YYYY ");
$("#currentDay").text(today);

// creates a variable for the current hour, to use for comparing schedule hour to current hour
var currentHour = dayjs().format("H");
console.log(currentHour);

$(function () {
  $(".time-block").each(function () {
    // get id from each .time-block class, split by '-'
    var hour = $(this).attr("id").split("-");
    console.log(hour);
    // convert hour variable into an int
    // Add past, present or future class depending on timeblock hour compared to current hour
    if (parseInt(hour[1]) < currentHour) {
      $(this).addClass("past");
    } else if (parseInt(hour[1]) == currentHour) {
      $(this).addClass("present");
    } else if (parseInt(hour[1]) > currentHour) {
      $(this).addClass("future");
    }
  });
  // when save button is clicked run the function
  $(".saveBtn").on("click", function() {
  
  // create variable by using "this(save button)", get value of the sibling called 'textarea'
  var textAreaInput = $(this).siblings('textarea').val()
  console.log(textAreaInput)
  // create key variable, bu going to the parent of the save button, and getting its id
  var key = $(this).parent().attr("id")
  console.log(key)
  // save the key and the user input
  localStorage.setItem(key, textAreaInput)
  });
  // use a for loop to loop through each timeblock, and get the item from local storage
  for (var i = 9; i<=17; i++){
    $('#hour-' + i).children('textarea').val(localStorage.getItem('hour-' + i))
  }
});