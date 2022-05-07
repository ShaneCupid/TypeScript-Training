let reviews: number[] = [5, 5, 4.5, 1, 3];

//computer average
let total: number = 0;
for(let i=0; i < reviews.length; i++) {
console.log(reviews[i]);
//update value of total
total += reviews[i];
}
//computing average
let average: number = total/reviews.length;
console.log("Review average = "  + average);
