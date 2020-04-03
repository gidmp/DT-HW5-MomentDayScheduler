
var date = moment().format('MMMM Do YYYY');
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//shows current hour, look at console for reference, compare this to the timeblocks
var currentHour = moment().hours()
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
        //set attribute for the time to compare it with currentHour variable
        createForm.attr("time", 9+i);
        //created data index so that we can save the content of the schedule locally
        createForm.attr("data-index", i)


        createSaveBtn.addClass("saveBtn col-1");
        createSaveBtn.html("<i class=\"fas fa-save\"></i>");
        //created data index so that we can save the content of the schedule locally
        createSaveBtn.attr("data-index", i)

        //change the color of the form based on current time
        if(currentHour === parseInt($("input").attr("time"))){
            currentHour.removeClass("past")
            currentHour.addClass("present")
        }

        createDiv.append(createForm, createSaveBtn)
        $(".container").append(createDiv);
        

    } 
    


    $(".saveBtn").on("click", function(){
        //save the content inside the input form into local storage and render it
    })
});

console.log(moment());
console.log(currentHour);

