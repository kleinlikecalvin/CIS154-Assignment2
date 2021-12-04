const button = document.getElementById('prizeBtn');
const checkForNonDigits = /\D/;//true if any !0-9 present

function buildSpan(alertString, id) {
        const newSpan = document.createElement("span");
        newSpan.style.color = "red";
        const alertStr = document.createTextNode(alertString);
        newSpan.appendChild(alertStr);
        document.getElementById(id).append(newSpan);
}

button.addEventListener("click", function () {

    //name 👍🏼
    const firstNameInput = document.getElementById("firstName");
    const checkForDigits = /\d/;//true digits are present
    const checkForSpecials = /\W/;//true specials are present

    if(firstNameInput.value == "" || firstNameInput.value.match(checkForSpecials) != null || firstNameInput.value.match(checkForDigits) != null) {

        buildSpan(" Please enter your first name", 'firstNameLabel');
    }


    //anyNum 👍🏼
    const anyNumInput = document.getElementById("anyNumber");
    //checkForNonDigits used here

    if(anyNumInput.value == "" || anyNumInput.value.match(checkForNonDigits) != null) {

        buildSpan(" Please enter only numerical digits", 'anyNumberLabel');
    }

    //verb 👍🏼
    const verbInput = document.getElementById("ingVerb");

    if(verbInput.value == "" || !verbInput.value.endsWith("ing")) {

        buildSpan(" Please enter a proper response", 'ingVerbLabel');
    }    
    
    //doors 👍🏼
    const doors = document.querySelectorAll("input[type='radio']");

    if(!doors[0].checked && !doors[1].checked && !doors[2].checked && !doors[3].checked) {

        buildSpan(" Can't win a prize without a choosing a door", 'doorsLabel');
    }        

    //7-14 👍🏼
    const betweenNum = document.getElementById("sevenToFourteen");
    const betweenExp = betweenNum.value >= 7 && betweenNum.value <= 14;
    //checkForNonDigits used here

    if(betweenNum.value == "" || !betweenExp || betweenNum.value.match(checkForNonDigits) != null) {

        buildSpan(" Please enter only one number from 7 - 14", 'sevenToFourteenLabel');
    }        

    //B name 👍🏼
    const bName = document.getElementById("nameWithB");
    let str = bName.value.toUpperCase();
    
    if(bName.value == "" || !str.startsWith("B")) {

        buildSpan(" Gotsta start with a 'B'", 'nameWithBLabel');
    }

//🚨 If an alert appears then the input is revisited to fix then the alert should disappear during the fix. So maybe like an while(the input is in focus) { remove alert}?

/*
INSTRUCTIONS FROM ASSIGNMENT
--I need to watch the demo 11 video in order to finish this assignment

--Once a new value has been entered, the red text needs to disappear (just like we did in the class demo)

--Once the form checks out okay, you will need to call a function (at the bottom of the form check function as seen in the demo) that will run code the that creates the cookie information. When this cookie making function runs, the items entered/selected in the form will be saved into a cookie file and window.location will be used to go to another page that will read the values back from the cookie file and display them on that page. DO NOT USE window.open()!!!!!

***Remember, you will ultimately have five different values that will need to be saved into the cookie file, read from the cookie file, and then displayed on a separate page
To summarize, the five things that will be saved into the cookie file and displayed on the separate page are: The persons name (see #1 above), a number (see #2 above), another value that starts or ends with certain letters of your choice (see #3 above), an image (see #4 above), and text that relates to the image (see #4 above).

*/

}); //end button click event


				
