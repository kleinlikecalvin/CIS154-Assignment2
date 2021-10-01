//Start JS Code
//Radio Items
const radioItems = document.getElementsByName("color-radio");

for(let i = 0; i < radioItems.length; i++){
	document.getElementById(radioItems[i].id).addEventListener("click", changeBackground);
}//end radioItems for

//Text Input
document.getElementById("text-input").addEventListener("change", changeBackground);

//Buttons
const buttons = document.getElementsByName("color-btn");

for(let i = 0; i < buttons.length; i++){
	document.getElementById(buttons[i].id).addEventListener("click", changeBackground);
}//end buttons for

//Dropdown Select
document.getElementById("color-drop").addEventListener("change", changeBackground);

//Checkboxes
const checks = document.getElementsByName("color-checkbox");

for(let i = 0; i < checks.length; i++){
	document.getElementById(checks[i].id).addEventListener("click", changeBackground);
}//end checks for

//Paragraph tags
const p = document.getElementsByName("p");

for(let i = 0; i < p.length; i++){
	document.getElementById(p[i].id).addEventListener("click", changeBackground);
}//end p for

function changeBackground(){
    const colorVal = this.id;
    document.getElementById("bg-color").style.backgroundColor = colorVal;
}//end changeBackground()

jQuery(
    function(){
        //Radio items
        $(".jQradio-container input").click(
			function(){
				$("body").css("background-color", this.value);
			}//end nested anon function
        );//end radio button click event

        //Text Input
        $("#jQtext-input").change(
			function(){
				$("body").css("background-color", this.value);
			}//end nested anon function
        );//end text input change event

        //Buttons
        $(".jQbutton-container input").click(
			function(){
				$("body").css("background-color", this.id);
			}//end nested anon function
        );//end button click event

        //Dropdown Select
        $("#jQcolor-drop").change(
			function(){
				$("body").css("background-color", this.value);
			}//end nested anon function
        );//end select change event

        //Checkboxes
        $(".jQcheckbox-container input").click(
            function(){
                $("body").css("background-color", this.id);
            }//end nested anon function
        );//end checkbox click event

        //Paragraph tags
        $(".jQp-container p").click(
            function(){
                $("body").css("background-color", this.id);
            }//end nested anon function
        );//end checkbox click event
    }//end master function
);//end main jQuery