//useful for dom manipulation.
function sayHi() {
    console.log('hi');
    console.log(this);
}
//'this' is a reference to an object, object represent to current execution scope

const person = {
    first: 'Elon',
    last: 'Musk',
    nickName: 'Papa Elon',
    fullName() {
        const { first, last, nickName } = this;
        return `${first} ${last} AKA: ${nickName}`;
    },
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        console.log(`${fullName} is a person`);
    },
};

//Invocation Context: the value of 'this' depends on the invocation context of the function it is used in.
//this typically refers to the left side of the method. if no left side, it refers to the window(global object)
const printBio = person.printBio;

//arrow function do not have a this
