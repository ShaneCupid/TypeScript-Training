"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketCoach_1 = require("./cricketCoach");
const golfCoach_1 = require("./golfCoach");
let myCricketCoach = new cricketCoach_1.CricketCoach();
let myGolfCoach = new golfCoach_1.GolfCoach();
//declare an array for coaches... initially empty
let theCoaches = [];
//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let SirAlex of theCoaches) {
    console.log(SirAlex.getDailyWorkout());
}
