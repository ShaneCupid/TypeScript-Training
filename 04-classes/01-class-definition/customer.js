var Customer = /** @class */ (function () {
    //define constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//create instances
var myCustomer = new Customer("Martin", "Lawrence");
//myCustomer.firstName = "Martin";
//myCustomer.lastName ="Lawrence";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
