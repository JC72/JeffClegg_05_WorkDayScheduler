# JeffClegg_05_WorkDayScheduler

This project was designed as a homework assignment for MSU's coding bootcamp. 

This application was created to emphasize the use of HTML, CSS , jQuery & Moment.js. Also, this project was  how to use jQuery to manipulate the HTML & CSS pages.

This project has been deployed to my Personal GitHub Page. To get this project up and running, you can follow the deployment links that I have included in the Link Section below.

## Links

* [GitHub Repository](https://github.com/JC72/JeffClegg_05_WorkDayScheduler)
* [Deployed GitHub IO](https://jc72.github.io/JeffClegg_05_WorkDayScheduler/) 

### Project Overview
* HTML, CSS, jQuery (using Moment.js) documents create a scheduler that allow a user to create one day schedule for the current day and store it in local storage.
* This project emphasizes the use of using jQuert (with Moment.js) to make dynamic changes to an HMTL & CSS document.

### This assignment contains the following features: 
* The Scheduler page with input groups from 6:00 am to 6:00 pm
    * I did this to allow those that work non standard hours to use this as well
    * The user will be able to put tasks into the input field
    * The user then can save the information and store it

    ![Start Page](https://github.com/JC72/JeffClegg_05_WorkDayScheduler/blob/main/Assests/images/ScreenShots/Start.png)

* The input fields are colored mark based on the time of day.
    * Red is for the present, Green is for the future & Grey is for the past.
    * User can input their events into the input box.

    ![InPutting](https://github.com/JC72/JeffClegg_05_WorkDayScheduler/blob/main/Assests/images/ScreenShots/inputing.png)

    * Bonus items I added:
        1. was the line-through text decoration in the style.css

        ![ColorCode](https://github.com/JC72/JeffClegg_05_WorkDayScheduler/blob/main/Assests/images/ScreenShots/colorcode.png)

        2. A set of code on lines 75 through 78 which if activated would lock the input field and remove the save button.  Did not activate it because it was not part of the assignment but I tested it and does work.

    ![Lock](https://github.com/JC72/JeffClegg_05_WorkDayScheduler/blob/main/Assests/images/ScreenShots/locknnosave.png)

* Scheduler after Refresh
    * Final product once page is refreshed will show that the event has been saved.
    * Then Returned from local storage to its appropriate timeblock.

    ![Refresh](https://github.com/JC72/JeffClegg_05_WorkDayScheduler/blob/main/Assests/images/ScreenShots/Refresh.png)

### Project Requirements: 

* The user when opening the scheduler will see the current day at the top of the calendar.
* The user scrolls down and there are timeblocks: 
    * Time starts at 6 am and ends at 6 pm (did this in for those who don't work standard hours)
    * Each Timeblock is color coded as follows to show where the schedule is based on  current time:
        * Red - Present
        * Green - Future
        * Grey - Past
* The user then can click into a specific timeblock to enter a event.
* The user then can click on the save button for that timeblock
    * Where once clicked will store the event into local storage.
* Then if the user refreshed the page the saved events persist.     

### This project has several scripted features of: 
* Event listener (onclick) to allow the user to save there event in the input fields an retrieve it from local storage when page is refreshed.
* An array & forEach loop with a function that generates all the timeblocks into the HTML.
* A moment funtion that pulls the current date and time and sets its format and places it in the header.
* A if-else statement the will verify if the timeblock time is in the past, present or future based of the current time. 
* A variable that joins the value to the intials and appends to a list item.
* A for loop for getting the events from localstorage and pulling it back and appending it the appropriate time block.

### To Execute File:
> Open in browser by way of Deployed IO link

### Contains: 
* One HTML Page
    * Index.html 

* One CSS Page
    * Styles.css
        * Contains styling for html user input features
        
* One Javascript Page
    * Contains:
        * moment(); to pull in the date and time 
        * Variables, including arrays and value placeholders
        * Event listener & function
        * forEach loop
        * if/else if statement
        * For Loop

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp