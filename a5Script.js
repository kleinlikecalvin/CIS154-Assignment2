const button = document.getElementById('prizeBtn');

const firstNameInput = document.getElementById("firstName");
const nameAlertSpanId = "nameAlertSpan";

const anyNumInput = document.getElementById("anyNumber");
const anyNumAlertSpanId = "anyNumAlertSpan";

const verbInput = document.getElementById("ingVerb");
const verbAlertSpanId = "ingVerbAlertSpan";

const doors = document.querySelectorAll("input[type='radio']");
const doorsAlertSpanId = "doorsAlertSpan";

const betweenNumInput = document.getElementById("sevenToFourteen");
const betweenAlertSpanId = "betweenNumAlertSpan";

const bNameInput = document.getElementById("nameWithB");
const bNameAlertSpanId = "bNameAlertSpan";

let invalid;
    


function showAlertSpan(spanId, alertString) {

    const spanToShow = document.getElementById(spanId);

    if(spanToShow.style.display == "none" || spanToShow.innerHTML == "") {

        spanToShow.style.display = "inline";
        spanToShow.innerHTML = alertString;

    }

}


function hideAlertSpan(spanId) {

    const spanToRemove = document.getElementById(spanId);    
    
    if(spanToRemove.style.display = "inline") {
        
        spanToRemove.style.display = "none";

    }

}


button.addEventListener("click", function () {

    const checkForNonDigits = /\D/;//true if any !0-9 present

    //name 👍🏼 ~~~~~~~~~~~~~~~
    const checkForDigits = /\d/;//true digits are present
    const checkForSpecials = /\W/;//true specials are present

    if(firstNameInput.value == "" || firstNameInput.value.match(checkForSpecials) != null || firstNameInput.value.match(checkForDigits) != null) {

        showAlertSpan(nameAlertSpanId, " Please enter your first name");

        invalid = true;

    } else {

        invalid = false;

    }

    firstNameInput.addEventListener("change", () => hideAlertSpan(nameAlertSpanId));


    //anyNum 👍🏼 ~~~~~~~~~~~~~~~
    //checkForNonDigits used here
    if(anyNumInput.value == "" || anyNumInput.value.match(checkForNonDigits) != null) {

        showAlertSpan(anyNumAlertSpanId, " Please enter only numerical digits", 'anyNumberLabel');

        anyNumInput.addEventListener("change", () => hideAlertSpan(anyNumAlertSpanId));

        invalid = true;

    } else {

        invalid = false;
        
    }


    //verb 👍🏼 ~~~~~~~~~~~~~~~
    if(verbInput.value == "" || !verbInput.value.endsWith("ing") || verbInput.value.match(checkForSpecials) != null || verbInput.value.match(checkForDigits) != null) {

        showAlertSpan(verbAlertSpanId, " Please enter a proper response");

        verbInput.addEventListener("change", () => hideAlertSpan(verbAlertSpanId));

        invalid = true;

    } else {

        invalid = false;
        
    }
    
    //doors 👍🏼 ~~~~~~~~~~~~~~~
    if(!doors[0].checked && !doors[1].checked && !doors[2].checked && !doors[3].checked) {

        showAlertSpan(doorsAlertSpanId, " Can't win a prize without a choosing a door");
    
        doors[0].addEventListener("click", () => hideAlertSpan(doorsAlertSpanId));
        doors[1].addEventListener("click", () => hideAlertSpan(doorsAlertSpanId));
        doors[2].addEventListener("click", () => hideAlertSpan(doorsAlertSpanId));
        doors[3].addEventListener("click", () => hideAlertSpan(doorsAlertSpanId));    

        invalid = true;

    } else {

        invalid = false;
        
    }            


    //7-14 👍🏼 ~~~~~~~~~~~~~~~
    //checkForNonDigits used here
    const betweenExp = betweenNumInput.value >= 7 && betweenNumInput.value <= 14;
    
    if(betweenNumInput.value == "" || !betweenExp || betweenNumInput.value.match(checkForNonDigits) != null) {

        showAlertSpan(betweenAlertSpanId, " Please enter only one number from 7 - 14");

        betweenNumInput.addEventListener("change", () => hideAlertSpan(betweenAlertSpanId));

        invalid = true;

    } else {

        invalid = false;
        
    }    
 
    //B name 👍🏼 ~~~~~~~~~~~~~~~
    let str = bNameInput.value.toUpperCase();
    
    if(bNameInput.value == "" || !str.startsWith("B")) {

        showAlertSpan(bNameAlertSpanId, " Gotsta start with a 'B'");

        bNameInput.addEventListener("change", () => hideAlertSpan(bNameAlertSpanId));
        invalid = true;

    } else {

        invalid = false;
        
    }


    //Are there invalid responses?~~~~~~~~~~~~~~~
    if(invalid == false) {
        alert("Let's make some cookies");
        makeCookies();
    }
}); //end button click event


function makeCookies() {

    const cookieIngredients = firstNameInput.value + " " + anyNumInput.value + " "  + verbInput.value + " "  + doors.value + " "  + betweenNumInput.value + " "  + bNameInput.value;

    console.log(cookieIngredients);

    document.cookie = encodeURI(cookieIngredients) + "; SameSite=Strict; expires=Tuesday, 10 Jan 2023 10:00:00 GMT";

	document.location = "cookieDisplay.html";

}//end makeCookies()
				
