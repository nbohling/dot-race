import assert from 'assert';
import { Dot } from '../dot.mjs';
import { Car } from '../car.mjs';

describe('Dot', () => {
    describe('.isTouchingCar', () => {
        const dot = new Dot(null);
        dot._position.x = 0;
        const car = new Car(null, null, [0, 0]);
    })
})