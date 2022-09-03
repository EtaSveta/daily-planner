// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

var tasks = {};


var saveTasks = function() {
    
  };

$(".saveBtn").on('click', function() {
    // get form values
    
    var taskText = $("textarea").val();
    var taskHour = $(".hour").text();
    console.log(taskHour)
  
    localStorage.setItem(taskText, taskHour);
    
  });
    