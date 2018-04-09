$(document).ready(function() {

//function called so that quote is present at document ready
getJSON();

    //calls a new quote when button is clicked
    $("#get-quote").on("click", function() {
        getJSON();
    });
});


//Calling this function will add quotes to the page.
function getJSON () {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://thesimpsonsquoteapi.glitch.me/quotes?count=30');
  ourRequest.onload = function() {

    //all json data inside ourData variable.
    var ourData = JSON.parse(ourRequest.responseText);

    //calls function to render HTML using ourData variable.
    renderHTML(ourData);
  };

  //sends data request
  ourRequest.send();
}


//This function takes in JSON and grabs important info. That info is used as neccessary for display and tweets.
function renderHTML(data) {

  var quote = "";
  var character = "";
  var tweetQuote = "";
  var tweetCharacter = "";

  tweetQuote += data[0].quote;
  tweetCharacter += data[0].character;
  
  quote += "<p>" + data[0].quote + "</p>";
  character += "<p> -" + data[0].character + "</p>";

  //Empty the quote content divs so that only one appears at any given time.
  $("#quote-text").empty();
  $("#quote-source").empty();

  $("#quote-text").append(quote);
  $("#quote-source").append(character);

  //This bit adds custom text, url and hashtag when user presses the tweet button. It changes based on the current quote.
  $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + "\"" + tweetQuote + "\" -" + tweetCharacter + "&hashtags=SimpsonsQuotes");
}
