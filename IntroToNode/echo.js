"use strict";
const echo = (phrase, iterations) => {
    let count = 0;
    while(count < iterations){
       console.log(phrase); 
       count++;
    }
};

echo("ECHO", 10);

echo("Tater Tots", 3);