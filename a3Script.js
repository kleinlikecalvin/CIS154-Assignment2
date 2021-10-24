$(loadXml);
function loadXml(){
    $.get("https://cors-anywhere.herokuapp.com/https://www.latimes.com/local/rss2.0.xml").done(function(feed){
        const story = $(feed).find("item");
        const randomNum = Math.floor(Math.random() * 10);
        $("#genBtn").click(function(){
                let image = story.find("media\\:content, content, url")[randomNum];//image 
                 
                // $("#image").html(image);     
                console.log(image);      
                let link = story.find("link")[randomNum].textContent;//href
                $("#webLink").attr("href", link);
                let title = story.find("title")[randomNum];
                $("#title").html(title);//title
                let description = story.find("description")[randomNum].textContent;//description
                $("#description").html(description + "<br><br> Click the image for more details!");
        });//end click() and nested anon functions
    }).fail(function(){
        console.log("Error message: Something isn't right...");
    });//end .get().done().fail()
}

                        // $("#genBtn").off("click");

/* 
WHERE I LEFT OFF 10/15/2021
-HAVE TO sign "login" to the cors-anywhere site first
-Need to figure out the page link url, how to get to the images, and inject new elements by using the html() rather than just injecting content into the already created elements
-Write if/else statement for images if they're undefined show default photo <--- if
-Maybe find a new RSS feed
  */