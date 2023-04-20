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

    getTimeRemainingReadable() {
        const totalSeconds = Math.round(this.getTimeLeft() / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const formattedTime = `${minutes}:${formattedSeconds}`;
        return formattedTime;
    }

    getPercentElapsed() {
        const timeRemaining = this.getTimeLeft()
        const percentElapsed = ((this.totalTime - timeRemaining) / this.totalTime) * 100;
        return percentElapsed;
    }
}

export default Timer;