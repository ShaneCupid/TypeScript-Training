"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myCircle = new circle_1.Circle(5, 10, 20);
let myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
//declare an array of shapes...initially empty
let theShapes = [];
//add shapes to array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let swaggyP of theShapes) {
    console.log(swaggyP.getInfo());
    console.log(swaggyP.calculateArea());
    console.log();
}
