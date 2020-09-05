class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaing);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
    };
    pause = () => {
        clearInterval(this.interval);
    };
    tick = () => {
        if (this.timeRemaing <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaing = this.timeRemaing - 0.01;
            if (this.onTick) {
                this.onTick(this.timeRemaing);
            }
        }
    };
    get timeRemaing() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaing(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
