// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

var tasks = {};


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

$("#saveBtn .saveBtn").click(function() {
    // get form values
    var taskText = $("#textarea").val();
    var taskHour = $("#hour").val();
  
    saveTasks(taskText, taskHour);
  
      // save in tasks array
      tasks.push({
        text: taskText,
        hour: taskHour
        
      });
      
    
  });
    