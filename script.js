// Today's date in the header
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

// save to local sorage with SAVE button
$(".saveBtn").on('click', function() {
    // get form values
    var taskHour = $(this).parent().attr("id");
    var taskText = $(this).parent().find("textarea").val();;   
    
    //save it to local storage
    localStorage.setItem(taskHour, taskText);
  });


// get tasks from local storage  
var loadTasks = function()   {
    var nineAm = localStorage.getItem("9");
    $("#9 .description").val(nineAm);

    var tenAm = localStorage.getItem("10");
    $("#10 .description").val(tenAm);

    var elevAm = localStorage.getItem("11");
    $("#11 .description").val(elevAm);

    var twelveAm = localStorage.getItem("12");
    $("#12 .description").val(twelveAm);

    var onePm = localStorage.getItem("13");
    $("#13 .description").val(onePm);

    var twoPm = localStorage.getItem("14");
    $("#14 .description").val(twoPm);

    var threePm = localStorage.getItem("15");
    $("#15 .description").val(threePm);

    var fourPm = localStorage.getItem("16");
    $("#16 .description").val(fourPm);

    var fivePm = localStorage.getItem("17");
    $("#17 .description").val(fivePm);
}

loadTasks();


// current hour of the day
var currentHour = moment().hour();

//colorcode each hour section
$(".hour").each(function() {
    var timeBlock = parseInt($(this).prop("id"));
    console.log(timeBlock)
    if (timeBlock < currentHour){
        $(".description").addClass('past');
    }
    else if (timeBlock == currentHour) {
        $(this).parent().find(".description").removeClass('past');
        $(this).parent().find(".description").addClass('present');
    }
    else {
        $(this).parent().find(".description").removeClass('present');
        $(this).parent().find(".description").addClass('future');
    }
})



