let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Boxing");
sportsTwo.push("Futbol");

for(let addSports of sportsTwo) {
    console.log(addSports);

    if(addSports == "Futbol")
    console.log(addSports + " is the best sport")
}

