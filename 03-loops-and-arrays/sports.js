var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for (let i=0; i < sportsOne.length; i++) {
console.log(sportsOne[i]);
}
*/
//Lets use the simplified for lopp
//for each
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var anyName = sportsOne_1[_i];
    console.log(anyName);
    //conditionals
    if (anyName == "Cricket") {
        console.log(anyName + " <-- My Fav Sport");
    }
}
