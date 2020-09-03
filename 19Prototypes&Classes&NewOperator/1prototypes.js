//what is the __proto__ property?
//__proto__ is a reference to the .prototype object to different classes of
//things that has .prototypes
//proto are properties that reference the prototype.
//ex every array(objects) have properties in __proto__
//each different array has reference to one prototype.
//there is a prototype for document.body, string.

//I can define an object and set the prototype to the array prototype
//So they can have access to the same methods. Prototypes are template objects

//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [6, 7, 8, 9];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
