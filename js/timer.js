class Timer {
    constructor() {
        this.startTime = Date.now();
        this.totalTime = 0;
    }

    startCountDown(totalSeconds) {
        this.startTime = Date.now();
        this.totalTime = totalSeconds * 1000;
    }

    getTimeLeft() {
        const timeLeft = this.totalTime - (Date.now() - this.startTime);
        return timeLeft;
    }
}

export default Timer;