$(loadXml);
function loadXml(){
    $.get("https://cors-anywhere.herokuapp.com/https://podcastfeeds.nbcnews.com/HL4TzgYC").done(function(feed){
        let numOfItems = $(feed).find("item").length;//get number of items in feed

        $("#genBtn").click(function(){
            const randomNum = Math.floor(Math.random() * 500);//generate a random number
            const item = $(feed).find("item")[randomNum];//get an item at that random index

            if(randomNum <= numOfItems){
                let title = $(item).find("title");
                $("#title").html(title);//title

                let description = $(item).find("itunes\\:summary").text();//description
                $("#description").html(description + "<p id='moreDeets'>Click the image for more details!</p>");

                let link = $(item).find("link").text();//href
                $("#webLink").attr("href", link);

                let image = $(item).find("itunes\\:image, content");//image 
                let imageUrl = $(image).attr("href");
                console.log(imageUrl);
                if(imageUrl == undefined){
                    let defaultImage = "https://mpama.com/wp-content/uploads/2017/04/default-image.jpg";
                    $("#image").attr("src", defaultImage);
                }else{
                    $("#image").attr("src", imageUrl); 
                }//end image if/else
            }//end numOfItems if/else


        });//end click() and nested anon functions
    }).fail(function(){
        console.log("Error message: Something isn't right...");
    });//end .get().done().fail()
}