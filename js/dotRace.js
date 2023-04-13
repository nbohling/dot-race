import Car from './car.js';
import Dot from './dot.js';
import Timer from './timer.js';
import Lightbox from './lightbox.js';

let updateInterval = null;
let dots = [];

const colors = {
    blueTransparent: '#00fa',
    redTransparent: '#f00a',
    whiteTransparent: '#fffa'
}

const timer = new Timer();
const startMenuLightbox = new Lightbox('start-menu-lightbox');
const gameoverLightbox = new Lightbox('gameover-lightbox');
const gameboard = document.getElementById('gameboard');
const blueCarElement = document.getElementById('player-one');
const redCarElement = document.getElementById('player-two');
const bluePlayerScore = document.querySelector("#player-one-score .score");
const redPlayerScore = document.querySelector("#player-two-score .score");
const optionSubmit = document.getElementById('start');
const continueButton = document.getElementById('continue');
const blueCar = new Car(gameboard, blueCarElement, [0, 0]);
const redCar = new Car(gameboard, redCarElement, [525, 500]);

// Clears dots array and makes new ones dots
const makeDots = (dotCount) => {
    dots = [];
    for (let i = 0; i < dotCount; i++) {
        dots.push(new Dot(gameboard));
    }
}

// Updates car locations and checks dots
const update = () => {
    if (checkGameOver()) {
        stopGame();
    }
    blueCar.update();
    redCar.update();
    checkDots();
}

// Runs isTouchingCar for every dot for both cars
const checkDots = () => {
    for (const dot of dots) {
        if (dot.isTouchingCar(blueCar)) {
            dot.relocate();
            incrementElement(bluePlayerScore);
        } else if (dot.isTouchingCar(redCar)) {
            dot.relocate();
            incrementElement(redPlayerScore);
        }
    }
}

// Adds 1 to the value of the innerHTML of any HTML element
const incrementElement = (score) => {
    score.innerHTML = Number(score.innerHTML) + 1;
}

const keyDownHandler = (e) => {
    switch (e.code) {
        case 'KeyW':
            blueCar.direction = 1;
            break;
        case 'KeyA':
            blueCar.rotateDirection = -1;
            break;
        case 'KeyS':
            blueCar.direction = -1;
            break;
        case 'KeyD':
            blueCar.rotateDirection = 1;
            break;
        case 'KeyE':
            blueCar.direction = 2;
            break;
        case 'ArrowUp':
            redCar.direction = 1;
            break;
        case 'ArrowLeft':
            redCar.rotateDirection = -1;
            break;
        case 'ArrowDown':
            redCar.direction = -1;
            break;
        case 'ArrowRight':
            redCar.rotateDirection = 1;
            break;
        case 'KeyM':
            redCar.direction = 2;
            break;
    }
}

const keyUpHandler = (e) => {
    switch (e.code) {
        case 'KeyW':
            blueCar.direction = 0;
            break;
        case 'KeyA':
            blueCar.rotateDirection = 0;
            break;
        case 'KeyS':
            blueCar.direction = 0;
            break;
        case 'KeyD':
            blueCar.rotateDirection = 0;
            break;
        case 'ArrowUp':
            redCar.direction = 0;
            break;
        case 'ArrowLeft':
            redCar.rotateDirection = 0;
            break;
        case 'ArrowDown':
            redCar.direction = 0;
            break;
        case 'ArrowRight':
            redCar.rotateDirection = 0;
            break;
        case 'KeyE':
            blueCar.direction = 0;
            break;
    }
}

// Retrieves rules from the form
const getGameRules = (form) => {
    return {
        time: form.querySelector('#time-field').value,
        dotCount: form.querySelector('#dot-count-field').value
    }
}

// Starts a new game
const startGame = (e) => {
    const gameRules = getGameRules(e.target.form);
    startMenuLightbox.hide();
    makeDots(gameRules.dotCount);
    activateGame();
    startTimer(gameRules.time);
}

const startTimer = (time) => {
    timer.startCountDown(time);
}

const checkGameOver = () => {
    return timer.getTimeLeft() <= 0;
}

// Activates the update interval and binds keys
const activateGame = () => {
    updateInterval = setInterval(update, 17);
    document.onkeydown = keyDownHandler;
    document.onkeyup = keyUpHandler;
}

const stopGame = () => {
    deactivateGame();
    setupGameoverLightbox();
    gameoverLightbox.show();
}

const setupGameoverLightbox = () => {
    const scores = getScores();
    const winner = getWinner(scores);
    if (winner === 'blue') {
        gameoverLightbox.setBackgroundColor(colors.blueTransparent);
        gameoverLightbox.setBackgroundGrad(null);
        document.querySelector('#winner-declaration').innerHTML = 'Blue Wins!';
    } else if (winner === 'red') {
        gameoverLightbox.setBackgroundColor(colors.redTransparent);
        gameoverLightbox.setBackgroundGrad(null);
        document.querySelector('#winner-declaration').innerHTML = 'Red Wins!';
    } else {
        gameoverLightbox.setBackgroundColor(colors.whiteTransparent);
        gameoverLightbox.setBackgroundGrad(`linear-gradient(to right, ${colors.blueTransparent} , ${colors.redTransparent})`);
        document.querySelector('#winner-declaration').innerHTML = 'Tie!';
    }
    document.querySelector('#player-one-final-score .final-score').innerHTML = scores.blue;
    document.querySelector('#player-two-final-score .final-score').innerHTML = scores.red;
}

// Deactivates the update interval and unbinds keys
const deactivateGame = () => {
    clearInterval(updateInterval);
    document.onkeydown = null;
    document.onkeyup = null;
}

const getScores = () => {
    const blueScore = Number(bluePlayerScore.innerHTML);
    const redScore = Number(redPlayerScore.innerHTML);
    return {
        blue: blueScore,
        red: redScore
    }
}

const getWinner = (scores) => {
    if (scores.red > scores.blue) {
        return 'red';
    } else if (scores.blue > scores.red) {
        return 'blue';
    }

    return 'tie';
}

const reset = () => {
    bluePlayerScore.innerHTML = '0';
    redPlayerScore.innerHTML = '0';
    startMenuLightbox.show();
    gameoverLightbox.hide();
    blueCar.direction = 0;
    blueCar.rotateDirection = 0;
    redCar.direction = 0;
    redCar.direction = 0;
    for (const dot of dots) {
        dot._element.hidden = true;
    }
    dots = [];
}

optionSubmit.onmouseup = startGame;
continueButton.onmouseup = reset;