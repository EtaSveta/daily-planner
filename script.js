// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);




$(".saveBtn").on('click', function() {
    // get form values
    var taskHour = $(this).parent().attr("id");
    var taskText = $("textarea").val();   
     
    //save it to local storage
    localStorage.setItem(taskHour, taskText);
    
  });




var currentHour = moment().hour();
$(".hour").each(function() {
    var timeBlock = parseInt($(this).prop("id"));
    console.log(timeBlock)
    if (timeBlock < currentHour && timeBlock > currentHour - 6){
        $(this).addClass("list-group-item-danger")
        console.log(this)
    }
})




var loadTasks = function()   {
    // localStorage.getItem(taskText);
    var nineAm = localStorage.getItem("9");
    $("#9 .description").val(nineAm);
    
}

loadTasks();