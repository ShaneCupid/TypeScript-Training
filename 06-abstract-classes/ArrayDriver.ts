import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0,0,3,7);

//declare an array of shapes...initially empty
let theShapes: Shape []= [];

//add shapes to array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let swaggyP of theShapes) {
    console.log(swaggyP.getInfo());
    console.log(swaggyP.calculateArea());
    console.log();

}

