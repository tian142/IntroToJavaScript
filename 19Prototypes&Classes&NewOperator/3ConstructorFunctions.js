//The new keyword(operator)
//Fctory functions arnt popular because each new object created has their
//own functions. No reason to have a unique copy of the function it self
//ex) obj1.factoryFunction === obj2.objectFunction - false
//BUT "Hi".slice === "bye".slice. The prototypes are the same.

//the baisc constructor function demo:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// expected output: "Eagle"}

//-------------Our Constructor function with RGB color-----------

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this); //this will refer to the window(global scope).
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

//but if we call the function with "new": this will create a new object,
//this will refer to the new object, its like declaring an object at the top
//__proto__ will have a Color function now
new Color(255, 24, 199);

//these functoins are defiend in __proto__
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//rgba, the a is opacity
Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(200, 50, 50);
color1.rgba(0.5);

document.body.style.backgroundColor = color1.rgba(0.9);

//the above constructor functions are quite long, next, we will see how the new JS Classes (class keywork)
//will make it look better and prettier
