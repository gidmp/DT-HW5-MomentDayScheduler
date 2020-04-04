
var date = moment().format('MMMM Do YYYY');
var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//shows current hour, look at console for reference, compare this to the timeblocks
var currentHour = moment().hours()
//store input

$(document).ready(function() {
    //shows the current date
    $("#currentDay").append(date);

    //printing the interface
    for (var i = 0; i < time.length; i++) {
        var createDiv = $("<div>");
        var createForm = $("<input>");
        var createSaveBtn = $("<button>");
        var blockTime = 9 + i;

        createDiv.addClass("time-block row ");
        createDiv.attr("id", "hour-" + i)
        createDiv.text(time[i]);

        createForm.addClass("description col-10 past");
        //set attribute for the time to compare it with currentHour variable
        createForm.attr("time", blockTime);
        //created data index so that we can save the content of the schedule locally
        createForm.attr("data-index", i)


        createSaveBtn.addClass("saveBtn col-1");
        createSaveBtn.html("<i class=\"fas fa-save\"></i>");
        //created data index so that we can save the content of the schedule locally
        createSaveBtn.attr("data-index", i)

        //append the timeblocks
        createDiv.append(createForm, createSaveBtn)
        $(".container").append(createDiv);

        //change the color of the form based on current time
        if(currentHour === blockTime){
            createForm.removeClass("past");
            createForm.addClass("present");
        } else if (currentHour < blockTime){
            createForm.removeClass("past");
            createForm.addClass("future");
        } else {
            createForm.addClass("past");
        }
 
        console.log(parseInt($("input").attr("time")));

    }     
    

    //Storage------------------------------------------------------------------

    var scheduleStorage = [];
    var form = $("input");
    var saveBtn = $("button")

    // init();


    // function init(){
    //     var storedInput = JSON.parse(localStorage.getItem("storage"));
    //     if (storedInput !== null){
    //         scheduleStorage = storedInput;
    //     } 
    // }
    

    function storeInput(time, value){
        localStorage.setItem(time, value);
    }
    

    //save the content inside the input form into local storage and render it when clicked
    function submitSchedule(e){ 
        e.preventDefault();
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // if(input === ""){
        //     return;
        // }
        // if (form.attr("data-index") === $(this).attr("data-index")){
        //     scheduleStorage.push(time, input);
        // }
        storeInput(time, input);
        //if event.target have teh same data index as the input form, save the input form
    }

    $(document).on("click", ".saveBtn", submitSchedule);

    $("#hour-0 .description").val(localStorage.getItem("hour-0"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
});

console.log(moment());
console.log(currentHour);



