// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);




$(".saveBtn").on('click', function() {
    // get form values
    var taskHour = $(this).parent().attr("id");
    console.log(taskHour)
    var taskText = $("textarea").val();   
    console.log(taskText)

    //save it to local storage
    localStorage.setItem(taskHour, taskText);
    
  });


  
var loadTasks = function()   {
    // localStorage.getItem(taskText);
    var nineAm = localStorage.getItem("9");
    $("#9 .description").val(nineAm);

    var twoPm = localStorage.getItem("14");
    $("#14 .description").val(twoPm);
    // console.log(twoPm)
}

loadTasks();



// var currentHour = moment().hour();
// $(".time-block").each(function() {
//     var timeBlock = parseInt($(this).prop("id"));
//     console.log(timeBlock)
//     if (timeBlock < currentHour){
//         $(".description").addClass('past');
//     }
//     else if (timeBlock == currentHour) {
//         $(".description").removeClass('past');
//         $(".description").addClass('present');
//     }
// })



