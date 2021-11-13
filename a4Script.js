jQuery(
    function() {

        $("#dateInput").datepicker(
            {
                dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                dateFormat: "MM d, yy"
            }
        );//end datepicker plugin

        $("#a4btn").click(function() {

            const task = $("#taskInput").val();
            const dueDate = $("#dateInput").val();
            const taskDateMs = new Date(dueDate).getTime();
            const rightNow = new Date().getTime();
            const daysUntil = Math.floor((taskDateMs - rightNow)/86400000) + 1; 
            //I don't understand why my calculation returns an extra day (number) so I added a 1 to fix the bug.
            const newLi = "<li class='taskListItem' value='" + daysUntil + "'><p class='task'>" + task + "</p><p class='date'>Due Date: " + dueDate + "</p><p class='daysUntil' value># of days until due date: <span>" + daysUntil + "<span></p></li>";

            $("#taskContainer").append(newLi);
            $("#taskCounter").html($(".taskListItem").length);

            clearValues();


        });//end add task button click event

        function clearValues() {

            userTask = $("#taskInput").val('');
            userTaskDate = $("#dateInput").val('');
            daysUntil = NaN;

        }//end clearInputs()

    }//end master function
);//end jQuery