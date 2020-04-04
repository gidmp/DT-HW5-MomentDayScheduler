# DT-HW5-MomentDayScheduler
5th homework for UWMC coding bootcamp

Moment day scheduler link: https://gidmp.github.io/DT-HW5-MomentDayScheduler/

The goal of this home is to make a schedule maker where you can input and save a task in a timeblock that will,visually, let you know the timeframe. This app is made with its core mechanic centered around Moment.JS. The HTML and CSS were provided by the class so I focused on the javascript.

    1. The current date and time were dynamically implemented using moment JS. The current hour is stored in a variable for comparison with each hour the timeblock represents

    2. The timeblock and the save button were dynamically created by looping through an array containing each time block representation.

    3. while the time block were created, we attach 2 attributes as identifier. the first is hour-n which we will compare with current time, which then we'll use as reference to color each timeblock based on whether the task is in the future, present or past.

    4. the second attribute is data-index which contain an integer. This attributte is shared with the save button adjacent to the timeblock. The purpose of this is to let the save button kknow which timeblock to save in local storage when clicked.

    5. append each timeblock to the container.

