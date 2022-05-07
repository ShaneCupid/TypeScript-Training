var reviews = [5, 5, 4.5, 1, 3];
//computer average
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    //update value of total
    total += reviews[i];
}
//computing average
var average = total / reviews.length;
console.log("Review average = " + average);
