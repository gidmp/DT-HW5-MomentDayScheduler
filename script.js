console.log(moment());

var date = moment().format('MMMM Do YYYY');
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var scheduleStorage = [];

$(document).ready(function() {
    //shows the current date
    $("#currentDay").append(date);

    //printing the interface
    for (var i = 0; i < time.length; i++) {
        var createDiv = $("<div>");
        var createForm = $("<input>");
        var createSaveBtn = $("<button>");

        createDiv.addClass("time-block row ");
        createDiv.text(time[i]);

        createForm.addClass("description col-10 past");

        createSaveBtn.addClass("saveBtn col-1");
        createSaveBtn.html("<i class=\"fas fa-save\"></i>");

        //create data index so that we can save the content of the schedule locally
        createDiv.attr("data-index", i)
        createForm.attr("data-index", i)
        createSaveBtn.attr("data-index", i)

        createDiv.append(createForm, createSaveBtn)
        $(".container").append(createDiv);
        

    }
    


    $(".saveBtn").on("click", function(){
        //save the content inside the input form into local storage and render it
    })
});

