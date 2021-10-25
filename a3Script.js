$(loadXml);
function loadXml(){
    $.get("https://cors-anywhere.herokuapp.com/https://podcastfeeds.nbcnews.com/HL4TzgYC").done(function(feed){
        $("#genBtn").click(function(){
            const randomNum = Math.floor(Math.random() * 500);
            const item = $(feed).find("item")[8];

            let title = $(item).find("title");
            $("#title").html(title);//title

            let description = $(item).find("itunes\\:summary").text();//description
            $("#description").html(description + "<p id='moreDeets'>Click the image for more details!</p>");

            let link = $(item).find("link").text();//href
            $("#webLink").attr("href", link);

            let image = $(item).find("itunes\\:image").text();//image 
            console.log(image);
            let imageUrl = $(image).attr("url");
            console.log(imageUrl);
            $("#image").html(image);   


        });//end click() and nested anon functions
    }).fail(function(){
        console.log("Error message: Something isn't right...");
    });//end .get().done().fail()
}

                        // $("#genBtn").off("click");

/* 
-description doesn't work
-link doesn't work
-image doesn't work
  */