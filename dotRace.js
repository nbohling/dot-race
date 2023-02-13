import { Car } from './car.mjs';

let gameActive = false;

const gameboard = document.getElementById('gameboard');
const car1Element = document.getElementById('player-one');
const car2Element = document.getElementById('player-two');
const car1 = new Car(gameboard, car1Element, [0, 0]);
const car2 = new Car(gameboard, car2Element, [525, 500]);

const update = () => {
    car1.update()
    car2.update()
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

document.onkeydown = keyDownHandler;
document.onkeyup = keyUpHandler;

setInterval(update, 17);