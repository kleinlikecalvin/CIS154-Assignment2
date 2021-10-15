$(loadXml);
function loadXml(){
    $.get("https://cors-anywhere.herokuapp.com/https://feeds.simplecast.com/54nAGcIl").done(function(feed){
        const story = $(feed).find("item");
        const randomNum = Math.floor(Math.random() * 100);
        $("#genBtn").click(function(){
            if(randomNum <= story.length){
                $("#image").html();//image
                $("#webLink").html();//href
                $("#title").html(story.find("title")[randomNum].textContent);//title
                $("#description").html(story.find("description")[randomNum].textContent);//description
            }
        });//end click() and nested anon functions
    }).fail(function(){
        console.log("Error message: ", status);
    });//end .get().done().fail()
}



/* 
WHERE I LEFT OFF 10/15/2021
-HAVE TO sign "login" to the cors-anywhere site first
-Last thing I did was I changed all the append() to html()
-Need to figure out the page link url, how to get to the images, and inject new elements by using the html() rather than just injecting content into the already created elements
-Write if/else statement for images if they're undefined show default photo <--- if
-Maybe find a new RSS feed
  */