document.getElementById("btn").addEventListener("click", openNewWindow); //end button click event

function openNewWindow(){
    const userName = document.getElementById("nameInput").value;
    const windowConst = window.open("about:blank", "myWin", "width = 500, height = 500, screenX = 700, screenY = 300");

    windowConst.document.write("<body style='background-color: #FFF8E5; font-family: Verdana, Geneva, Tahoma, sans-serif;'</body>");
    windowConst.document.write("<h1 style='color: #e05d5d; text-decoration: underline; text-align: center;'>");
    windowConst.document.write("Hello " + userName);
    windowConst.document.write("</h1>");
    windowConst.document.write("<p style='text-align: center;'>");
    windowConst.document.write(userName + "... That's a pretty name... " + userName + "...");
    windowConst.document.write("</p>");
    windowConst.document.write("<p style='text-align: center;'>");
    windowConst.document.write("It's been great meeting you! Can you do me a solid before you go and click the \"Farewell!\" button below?");
    windowConst.document.write("</p>");
    windowConst.document.write("<p style='text-align: center;'>");
    windowConst.document.write("Bye for now " + userName + " 🖖🏻");
    windowConst.document.write("</p>");
    windowConst.document.write("<div style='text-align: center;'>");
    windowConst.document.write("<input type='button' value='Farewell!' id='byeBtn' align='middle'>");
    windowConst.document.write("</div>");
    windowConst.document.getElementById("byeBtn").addEventListener("click", closeNewWindow);

    function closeNewWindow(){
        windowConst.close();
    }
}