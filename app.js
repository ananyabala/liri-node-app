require("dotenv").config();
var keys = require("./keys.js");

// Twitter API
client.get('statuses/lookup', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites.
    console.log(response);  // Raw response object.
  });



var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

function liri (myTweets,spotifyThisSong,movieThis,doWhatItSays){
    this.myTweets=myTweets,
    this.spotifyThisSong=spotifyThisSong,
    this.movieThis=movieThis,
    this.doWhatItSays=doWhatItSays
}

