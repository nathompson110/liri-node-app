
var secretKeys = require("./keys.js");
var Twitter = require('twitter');
var value1= process.argv[3];
var value2= process.argv[3];
var request = require("request");

var Spotify = require('node-spotify-api')






var stringers = function (){
  if (process.argv.length>3)
  {
  for(var i=4; i< process.argv.length; i++)
  
    {value1 = value1 + process.argv[i]+" ";
    value2 = value2 + "+" + process.argv[i];
  };
  }
  else {
    return value1}
  
};

stringers();

function myTwitter(){
var secrets = secretKeys.twitterKeys
var myTwitt = new Twitter({
  consumer_key: secrets.consumer_key,
  consumer_secret: secrets.consumer_secret,
  access_token_key: secrets.access_token_key,
  access_token_secret: secrets.access_token_secret
});
 
var params = {screen_name: 'nathompson110'};
myTwitt.get('statuses/user_timeline.json', params, function(error, tweets, response) {
  if (!error) {
     tweets.forEach(function(tweety){
       console.log('-------------------------------------------------------------------------')
       console.log("The tweet: `" + tweety.text + "` was tweeted on: " + tweety.created_at)
     })
  }
});
}




 
function mySpotify(){
  var diff = new Spotify({
  id: secretKeys.spotifyKeys.client_id,
  secret: secretKeys.spotifyKeys.client_secret
});
 
diff.search({ type: 'track', query: value1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 else {
// console.log(data.tracks.items[0]);
var tpls = data.tracks.items[0];
console.log(tpls.artists[0].name); 
console.log(tpls.name);
console.log(tpls.preview_url);
console.log(tpls.album.name);
 }
});
}
// mySpotify();





function myMovie () {
request("http://www.omdbapi.com/?t=" + value2 + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

 
  if (!error && response.statusCode === 200) {
  var movieStats = JSON.parse(body); 
foreach(movieStats.Ratings)
{if (movieStats.Ratings[1].Source.includes("Rotten Tomatoes")){

  
}

}

    // console.log(movieStats);
    console.log(movieStats.Title);
    console.log(movieStats.Year);
    console.log(movieStats.Ratings.imdbRating);
    console.log(movieStats.Ratings[1].Source);
    console.log(movieStats.Country);
    console.log(movieStats.Language);
    console.log(movieStats.Plot);
    console.log(movieStats.Actors);
   }
  
});
};
myMovie();