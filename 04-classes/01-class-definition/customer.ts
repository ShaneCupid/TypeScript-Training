class Customer {

    firstName: string;
    lastName: string;

//define constructor
constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
}

}
//create instances
let myCustomer = new Customer("Martin", "Lawrence");

//myCustomer.firstName = "Martin";
//myCustomer.lastName ="Lawrence";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
