"use strict";

const average = (grades) => {
    console.log(Math.round(grades.reduce((a,b) => a + b) / grades.length));
};

const scores = [90,98,89,100,100,86,94];

const scores2 = [40,65,77,82,80,54,73,63,95,49];

average(scores);

average(scores2);