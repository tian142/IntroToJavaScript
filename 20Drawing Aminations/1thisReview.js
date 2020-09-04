class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    // below, the 'this' refers to the button. Not what we want
    // and if we call this.inportantMethodToCall() from here, it will not be a defined method.
    start() {
        console.log(this);
        this.inportantMethodToCall();
    }
    inportantMethodToCall() {
        console.log('important thing is done!');
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

// below, the 'this' is the instance of the timer class that we created
// which means we can access the different variables and methods. Which is what we want to see
timer.start();
