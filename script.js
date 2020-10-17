var timeSlots = {
    "9am": "",
    "10am": "",
    "11am": "",
    "12pm": "",
    "1pm": "",
    "2pm": "",
    "3pm": "",
    "4pm": "",
    "5pm": "",
};

// tried adding curent date/time into header //
$(document).ready(function(){
    //var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    //$("#currentDay").display(currentDate);
    //console.log("currentDate");

    $(".saveBtn").on("click", function(){
        var textareacontent = $(this).siblings("textarea").val();

        console.log(textareacontent);
    });

});
