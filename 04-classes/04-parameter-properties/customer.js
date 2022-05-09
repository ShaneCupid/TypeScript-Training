"use strict";
class Customer {
    //define constructor
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//create instances
let myCustomer = new Customer("Martin", "Lawrence");
//myCustomer.firstName = "Martin";
//myCustomer.lastName ="Lawrence";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
