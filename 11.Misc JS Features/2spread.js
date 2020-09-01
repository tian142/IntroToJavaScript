//spread - expandin an iterable to some other place: 1)function call 2)array literals 3)object literas

//spread in function calls:
const nums = [9, 2, 6, 1];
Math.max(nums); //NaN
Math.max(...nums); //same as calling Math.max(9,2,6,1)

//spread in array literals:
const land = ['dogs', 'cats', 'rats'];
const air = ['bird', 'owl', 'eagle'];
const sea = ['shark', 'turtle', 'dolphin'];

const landAir = [...land, ...air];

//spread in Object Literals
const feline = {
  legs: 4,
  family: 'cats',
};
const canine = {
  family: 'wooof',
  furry: true,
};

const dogs = {
  canine,
  hasBabies: true,
};

const dogs2 = {
  ...canine,
  hasBabies: true,
};
