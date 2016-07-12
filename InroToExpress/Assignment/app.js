var express = require("express");
var app = express();

// "/" => "Hi There. Welcome to my assignment"
app.get("/", function(req, res){
    res.send("Hi There! Welcome to my assignment!");
}); 
// "/speak/pig" "The pig says 'Oink!'"
// "/speak/cow" "The cow says Moo!"
// "/speak/dog" "The dog says Woof Woof!"
// add two other animans (cat, fish)
app.get("/speak/:animal/", function(req, res){
    var animal = req.params.animal;
    var sound = ""
    switch (animal) {
        case "pig":
            sound = "Oink";
            break;
        case "cow":
            sound = "Moo";
            break;
         case "dog":
            sound = "Woof Woof";
            break;
        case "cat":
            sound = "Meow";
            break;
        case "fish":
            sound = "Glub";
            break;
        default:
        sound = "What?!";
            
    };
    res.send("The "+animal+" says '"+sound+"'!")
});
// "/repeat/hello/3" "hello" 3x
// "/repeat/hello/5" "hello" 5x
// "/repeat/blah/2" "blah" 2x
app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = req.params.num;
    var count = 0;
    while(count < num){
        res.write(word+" ");
        count++
    }
    res.end();
});
// any other route "Sorry, page not found...What are you doing with your life?"
app.get("/*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server had started");
});
