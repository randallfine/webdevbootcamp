"use strict";
const faker = require("faker");


console.log("===================");
console.log("FAKER SHOP STUFF!!!");
console.log("===================");

for(var i = 0; i < 10; i++){
console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}