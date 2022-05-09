import { Coach } from "./coach";
import { CricketCoach } from "./cricketCoach";
import { GolfCoach } from "./golfCoach";

let myCricketCoach = new CricketCoach();

let myGolfCoach = new GolfCoach();

//declare an array for coaches... initially empty
let theCoaches: Coach[]=[];

//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let SirAlex of theCoaches ) {
    console.log(SirAlex.getDailyWorkout());
    
}