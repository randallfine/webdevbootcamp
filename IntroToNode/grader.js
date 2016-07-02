function average(arr){
    var sum = 0
    arr.forEach(function(score){
        sum += score
    });
    var avg = sum/arr.length;
    return Math.round(avg);
}

var scores = [90,98,89,100,100,86,94];
var scores2 = [40, 65,77,82,80,54,73,63,95,49];
console.log("Average Text Scores For Class A")
console.log(average(scores));
console.log("Average Text Scores For Class B")
console.log(average(scores2));