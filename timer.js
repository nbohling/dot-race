class Timer {
    constructor() {
        this.startTime = Date.now();
        this.totalTime = 0;
    }

    startCountDown(totalTime) {
        this.startTime = Date.now();
        this.totalTime = totalTime;
    }

    getTimeLeft() {
        return this.totalTime - (Date.now() - this.startTime);
    }
}

export default Timer;