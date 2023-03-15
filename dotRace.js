import { Car } from './car.mjs'
import { Dot } from './dot.mjs'

let gameActive = false;

const gameboard = document.getElementById('gameboard');
const car1Element = document.getElementById('player-one');
const car2Element = document.getElementById('player-two');
const player1Score = document.querySelector("#player-one-score .score");
const player2Score = document.querySelector("#player-two-score .score");
const car1 = new Car(gameboard, car1Element, [0, 0]);
const car2 = new Car(gameboard, car2Element, [525, 500]);
const dots = [];
const totalDots = 1;

for (let i = 0; i <= totalDots; i++) {
    dots.push(new Dot(gameboard));
}

const update = () => {
    car1.update();
    car2.update();
    checkDots();
}

const checkDots = () => {
    for (const dot of dots) {
        if (dot._isActive) {
            if (dot.isTouchingCar(car1)) {
                dot.relocate();
                incrementElement(player1Score);
            } else if (dot.isTouchingCar(car2)) {
                dot.relocate();
                incrementElement(player2Score);
            }
        }
    }
}

const createDot = () => {
    dots.push(new Dot());
}

const incrementElement = (score) => {
    score.innerHTML = Number(score.innerHTML) + 1;
}

const keyDownHandler = (event) => {
    switch (event.code) {
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

const keyUpHandler = (event) => {
    switch (event.code) {
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
    }
}

// setTimeout(() => dots.push(new Dot(gameboard)), 1000);

document.onkeydown = keyDownHandler;
document.onkeyup = keyUpHandler;

setInterval(update, 17);