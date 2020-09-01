//the problem:
// const newToDo = input.value;  //get user input
// saveToDataBase(newToDo); //this could take a while
// input.value = '';  //reset from

//The workaround: setTimeout
console.log('I print first');
setTimeout(() => {
    console.log('Iprint after 3 seconds!');
}, 3000);
console.log('I print second');

//How,why does it work? based on the single-threaddness, "I print second" should print last,
//because the settimeout should be running and taking time.

//BECAUSE: THE BROWSER DOES THE WORK. which usually is written in c++
//JS is not setting the timer or setting a request, the browser is.

//Browser come with Web APIs that are able to handle certain tasks in the background
//(like making requests or setTimeout)

//the JS call stack recognizes these Web API functions and passes them off
//to the browser to take care of

//Once the browser finishes those tasks, they return and are pushed onto the
//stack as callback.....so JS is asyncronous with the browser.
