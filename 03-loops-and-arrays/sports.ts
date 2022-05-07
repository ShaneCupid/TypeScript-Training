let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for (let i=0; i < sportsOne.length; i++) {
console.log(sportsOne[i]);
}
*/
//Lets use the simplified for lopp
//for each
for(let anyName of sportsOne) {
    console.log(anyName);

    //conditionals
    if(anyName == "Cricket") {
        console.log(anyName + " <-- My Fav Sport");

    }
}