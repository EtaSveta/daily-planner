// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);




$(".saveBtn").on('click', function() {
    // get form values
    var taskText = $("textarea").val();
    var taskHour = $(this).parent().attr("id");
        
    //save it to local storage
    localStorage.setItem(taskText, taskHour);
    
  });


var loadTasks = function()   {
    localStorage.getItem(taskText, taskHour);
    
}

loadTasks();