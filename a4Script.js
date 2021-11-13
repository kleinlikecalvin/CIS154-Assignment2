jQuery(
    function() {

        let i = 0;

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
            let daysUntil = Math.floor((taskDateMs - rightNow)/86400000) + 1; 
            //I don't understand why my calculation returns an extra day (number) so I added a 1 to fix the bug.
            const newLiSkeleton = "<li class='taskListItem' value='" + daysUntil + "'><p class='task'>" + task + "</p><p class='date'>Due Date: " + dueDate + "</p><p class='daysUntil' value># of days until due date: <span>" + daysUntil + "<span></p></li>";

            // if(!isNaN(daysUntil)){
            //     taskLiArray.push(newTaskLi);
            // }

            $("#taskContainer").append(newLiSkeleton);
            $("#taskCounter").html($(".taskListItem").length);
            console.log($(".taskListItem"));

            // for(let n = 0; n < $(".taskListItem").length; n++){
            //     let yes = 0;
            //     console.log(yes + 1);

            // }

            const lastLi = $(".taskListItem")[i - 1];
            console.log(lastLi);
            const thisLi = $(".taskListItem")[i];
            console.log(thisLi);

            $( ".taskListItem" ).each(function( index ) {
            console.log( index + ": " + $("p").text() );
            });

            if($(thisLi).attr("value") < $(lastLi).attr("value")){
                $(lastLi).prepend($(thisLi));
            }

            clearValues();

            i = i + 1;

            console.log("ITERATION: " + i);


        });//end add task button click event

        function clearValues() {

            userTask = $("#taskInput").val('');
            userTaskDate = $("#dateInput").val('');
            daysUntil = NaN;

        }//end clearInputs()

        const taskLiArray = [];
        // for(let n = 0; n < taskLiArray.length; n++){
        //     if()
        // }

        // if taskLiArray[i].includes("value='" + i +"'") < >;

    }//end master function
);//end jQuery