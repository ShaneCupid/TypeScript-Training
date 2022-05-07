var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Boxing");
sportsTwo.push("Futbol");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var addSports = sportsTwo_1[_i];
    console.log(addSports);
    if (addSports == "Futbol")
        console.log(addSports + " is the best sport");
}
