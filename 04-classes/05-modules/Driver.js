"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./customer");
//create instances
let myCustomer = new customer_1.Customer("Martin", "Lawrence");
//myCustomer.firstName = "Martin";
//myCustomer.lastName ="Lawrence";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
