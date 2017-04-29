const express = require("express");
const app = express();

app.get("/", function(req, res){
   res.send("Hi There"); 
});

app.get("/bye", function(req, res){
   res.send("Laterz!"); 
});

app.get("/dog", (req, res) => res.send("MEOW!"));


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});