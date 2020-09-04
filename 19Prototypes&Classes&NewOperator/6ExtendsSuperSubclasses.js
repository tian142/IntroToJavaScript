class Pet {
    constructor(name, age) {
        console.log('in pet constructor');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('in cat constructor');
        super(name, age); //super reference to the super class, we are extending the constructor form Pet
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'meow!';
    }
}

class Dog extends Pet {
    bark() {
        return 'woof';
    }
    eat() {
        return `${this.name} scarf's his food`; //this will stay even if eat is defined in Pet
    }
}

const monty = new Cat('monty', 9);
const ollie = new Dog('Ollie', 5);
