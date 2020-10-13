//This is to generate current time via moment.js from the date
moment(Date);
var currentdate = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").text("for "+ currentdate);


var currentTime = moment();
//sets current time back to zero. If it is 2:45 it push the time back to 2:00
currentTime = currentTime.startOf("hour");




//function to generate div sections in the container class for timeblocks

    //sets calendar hours for the input-groups
    var calendarHours = [6,7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    // loop to generate the input-groups into the HTML
    calendarHours.forEach(function(setTime) {

        //sets calendarHours text format
        var newCalendarHours = [];
        newCalendarHours.push(moment().hour(setTime).minutes("00").format("hh:mm A"));
        var timeCheck = moment().startOf('day').add(setTime, "hours");

        //create and append elements
        // this is the original div for the timeblock
        var rDiv = $("<div>");
        rDiv.addClass("row");

        var nDiv = $("<div>");
        nDiv.addClass("input-group input-group-md");
        nDiv.attr({"data-hour":setTime});
            
                // this creates a div that will be appended to nDiv
                var addDiv = $("<div>");
                addDiv.addClass("input-group-prepend");

                    //addSpan will be generated and appended to the addDiv element
                    var addSpan = $("<span>");
                    addSpan.addClass("input-group-text time-block block"+setTime);
                    addDiv.append(addSpan);
                
                //creates input box and sets a variable for the boxes input that is entered
                var inputText = $('<input>').attr('type', 'text');
                inputText.attr('aria-label="Medium"');
                inputText.addClass("form-control form" + setTime);
                inputText.data("hour");

                // creates the Save button with a label and icon
                var inputSubmit = $('<button>');
                inputSubmit.addClass("btn saveBtn");
        
                var icon = $('<i>');
                icon.addClass("far fa-save");
                icon.attr({"aria-hidden":"true"});
                var label = " <strong>Save</strong>";
                icon.append(label);
                inputSubmit.append(icon);

            // appends elements to the nDiv element here: 
            $(".container").append(rDiv);
            rDiv.append(nDiv);
            nDiv.append(addDiv);
            nDiv.append(inputText);
            nDiv.append(inputSubmit);
            addSpan.text (newCalendarHours);

    // This if-else statement will check to see if the hours
    //of the calendar are in the past, present, or future
    // and then will change there color accordingly
    if(currentTime.isAfter(timeCheck)) {
        $(".form" + setTime).addClass("past");

        //This line of code below is to allow developer to lock the input field
        //after time has passed
        //$(".form" + setTime).prop("disabled", true);
        //$(".saveBtn").remove();
    }
    else if (currentTime.isBefore(timeCheck)) {
        $(".form" + setTime).addClass("future");
    }
    else if (currentTime.isSame(timeCheck)) {
        $(".form" + setTime).addClass("present");
    };

    
});

// Loop to retrieve local storage data if page is refreshed:
for (var i = 0; i <calendarHours.length; i++) {
    var dHour = localStorage.getItem(calendarHours[i]);
    $(".form" + calendarHours[i]).val(dHour);
}

// This is the function for the save button to add the value of the input text field
$(".saveBtn").click(function() {
    //event.preventDefault();
    //This will get the forms value on the button that was clicked)
    var fValue = $(this).siblings(".form-control").val();
    var litem = $(this).parent().data("hour");

    localStorage.setItem(litem, fValue);
});