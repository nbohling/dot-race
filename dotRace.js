import Car from './car.js';
import Dot from './dot.js';
import Timer from './timer.js';

let updateInterval = null;
let dots = [];

const startMenuLightbox = document.getElementById('start-menu-lightbox');
const gameboard = document.getElementById('gameboard');
const car1Element = document.getElementById('player-one');
const car2Element = document.getElementById('player-two');
const player1Score = document.querySelector("#player-one-score .score");
const player2Score = document.querySelector("#player-two-score .score");
const optionSubmit = document.getElementById('start');
const car1 = new Car(gameboard, car1Element, [0, 0]);
const car2 = new Car(gameboard, car2Element, [525, 500]);

// Clears dots array and makes new ones dots
const makeDots = (dotCount) => {
    dots = [];
    for (let i = 0; i < dotCount; i++) {
        dots.push(new Dot(gameboard));
    }
}

// Updates car locations and checks dots
const update = () => {
    car1.update();
    car2.update();
    checkDots();
}

// Runs isTouchingCar for every dot for both cars
const checkDots = () => {
    for (const dot of dots) {
        if (dot.isTouchingCar(car1)) {
            dot.relocate();
            incrementElement(player1Score);
        } else if (dot.isTouchingCar(car2)) {
            dot.relocate();
            incrementElement(player2Score);
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
            car1.direction = 1;
            break;
        case 'KeyA':
            car1.rotateDirection = -1;
            break;
        case 'KeyS':
            car1.direction = -1;
            break;
        case 'KeyD':
            car1.rotateDirection = 1;
            break;
        case 'KeyE':
            car1.direction = 2;
            break;
        case 'ArrowUp':
            car2.direction = 1;
            break;
        case 'ArrowLeft':
            car2.rotateDirection = -1;
            break;
        case 'ArrowDown':
            car2.direction = -1;
            break;
        case 'ArrowRight':
            car2.rotateDirection = 1;
            break;
        case 'KeyM':
            car2.direction = 2;
            break;
    }
}

const keyUpHandler = (e) => {
    switch (e.code) {
        case 'KeyW':
            car1.direction = 0;
            break;
        case 'KeyA':
            car1.rotateDirection = 0;
            break;
        case 'KeyS':
            car1.direction = 0;
            break;
        case 'KeyD':
            car1.rotateDirection = 0;
            break;
        case 'ArrowUp':
            car2.direction = 0;
            break;
        case 'ArrowLeft':
            car2.rotateDirection = 0;
            break;
        case 'ArrowDown':
            car2.direction = 0;
            break;
        case 'ArrowRight':
            car2.rotateDirection = 0;
            break;
        case 'KeyE':
            car1.direction = 0;
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

// Hides the start menu 
const hideStartMenu = () => {
    startMenuLightbox.classList.add('hidden');
}

// Shows the start menu
const showStartMenu = () => {
    startMenuLightbox.classList.remove('hidden');
}

// Starts a new game
const start = (e) => {
    const gameRules = getGameRules(e.target.form);
    hideStartMenu();
    makeDots(gameRules.dotCount)
    startGame(gameRules);
}

// Activates the update interval and binds keys
const startGame = (gameRules) => {
    updateInterval = setInterval(update, 17);
    document.onkeydown = keyDownHandler;
    document.onkeyup = keyUpHandler;
}

// Deactivates the update interval and unbinds keys
const stopGame = () => {
    clearInterval(updateInterval);
    document.onkeydown = null;
    document.onkeyup = null;
}

optionSubmit.onmouseup = start;