/*var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})*/

var request = require("request");
request("http://www.googleblah.com", function(error, responce, body){
    if (error){
       console.log("something went wrong!") ;
       console.log(error);
    }else{
        if(responce.statusCode === 200){
            //Things Worked
            console.log(body);
        }
    }
    
})