const button = document.getElementById('prizeBtn');
const checkForNonDigits = /\D/;//true if any !0-9 present


button.addEventListener("click", function () {

    //name 👍🏼
    const firstNameInput = document.getElementById("firstName");
    const checkForDigits = /\d/;//true digits are present
    const checkForSpecials = /\W/;//true specials are present

    if(firstNameInput.value == "" || firstNameInput.value.match(checkForSpecials) != null || firstNameInput.value.match(checkForDigits) != null) {

        const nameSpan = document.createElement("span");
        nameSpan.style.color = "red";
        const firstNameAlert = document.createTextNode(" Please enter your first name");
        nameSpan.appendChild(firstNameAlert);
        document.getElementById('firstNameLabel').append(nameSpan);

    }


    //anyNum 👍🏼
    const anyNumInput = document.getElementById("anyNumber");

    if(anyNumInput.value == "" || anyNumInput.value.match(checkForNonDigits) != null) {

        const numSpan = document.createElement("span");
        numSpan.style.color = "red";
        const anyNumAlert = document.createTextNode(" Please enter only numerical digits");
        numSpan.appendChild(anyNumAlert);
        document.getElementById('anyNumberLabel').append(numSpan);

    }

    //verb 👍🏼
    const verbInput = document.getElementById("ingVerb");

    if(verbInput.value == "" || !verbInput.value.endsWith("ing")) {

        const verbSpan = document.createElement("span");
        verbSpan.style.color = "red";
        const verbAlert = document.createTextNode(" Please enter a proper response");
        verbSpan.appendChild(verbAlert);
        document.getElementById('ingVerbLabel').append(verbSpan);

    }    
    
    //doors 👍🏼
    const doorOneInput = document.getElementById("doorOne");
    const doorTwoInput = document.getElementById("doorTwo");
    const doorThreeInput = document.getElementById("doorThree");
    const doorFourInput = document.getElementById("doorFour");

    if(!doorOneInput.checked && !doorTwoInput.checked && !doorThreeInput.checked && !doorFourInput.checked) {

        const doorSpan = document.createElement("span");
        doorSpan.style.color = "red";
        const doorAlert = document.createTextNode(" Can't win a prize without a choosing a door");
        doorSpan.appendChild(doorAlert);
        document.getElementById('doorsLabel').append(doorSpan);

    }        

    //7-14 👍🏼
    const betweenNum = document.getElementById("sevenToFourteen");
    const betweenExp = betweenNum.value >= 7 && betweenNum.value <= 14;

    if(betweenNum.value == "" || !betweenExp || betweenNum.value.match(checkForNonDigits) != null) {

        const betweenNumSpan = document.createElement("span");
        betweenNumSpan.style.color = "red";
        const betweenNumAlert = document.createTextNode(" Please enter only one number from 7 - 14");
        betweenNumSpan.appendChild(betweenNumAlert);
        document.getElementById('sevenToFourteenLabel').append(betweenNumSpan);

    }        

    //B name 👍🏼
    const bName = document.getElementById("nameWithB");
    let str = bName.value.toUpperCase();
    
    if(bName.value == "" || !str.startsWith("B")) {

        const bNameSpan = document.createElement("span");
        bNameSpan.style.color = "red";
        const bNameAlert = document.createTextNode(" Gotsta start with a 'B'");
        bNameSpan.appendChild(bNameAlert);
        document.getElementById('nameWithBLabel').append(bNameSpan);

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


				
