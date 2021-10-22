$(loadXml);
function loadXml(){
    $.get("https://cors-anywhere.herokuapp.com/https://rss.art19.com/apology-line").done(function(feed){
        const story = $(feed).find("item");
        const randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum)
        $("#genBtn").click(function(){

                // $("#image").html(story.find("itunes:image")[randomNum].attr("href"));//image
                // let linkSpot = $("#webLink").attr("href") 
                let link = story.find("guid")[randomNum];//href
                console.log(link);
                // linkSpot.text(link);
            let title = story.find("title")[randomNum];
            $("#title").html(title);//title
                // $("#description").html(story.find("description")[randomNum].text);//description
            
        });//end click() and nested anon functions
    }).fail(function(){
        console.log("Error message: ", status);
    });//end .get().done().fail()
}



/* 
WHERE I LEFT OFF 10/15/2021
-HAVE TO sign "login" to the cors-anywhere site first
-Need to figure out the page link url, how to get to the images, and inject new elements by using the html() rather than just injecting content into the already created elements
-Write if/else statement for images if they're undefined show default photo <--- if
-Maybe find a new RSS feed
  */