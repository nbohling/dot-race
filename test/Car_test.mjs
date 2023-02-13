import assert from 'assert';
import { Car } from '../car.mjs';

describe('Car', () => {
    describe('.getFrontLeftCoordinates', () => {
        it('returns {x: -0, y: 48} when rotation is 0 degrees', () => {
            const expectedResult = {x: -0, y: 48};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getFrontLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 36} when rotation is 90 degrees', () => {
            const expectedResult = {x: 36, y: 36};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 24, y: 0} when rotation is 180 degrees', () => {
            const expectedResult = {x: 24, y: 0};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getFrontLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 12} when rotation is 270 degrees', () => {
            const expectedResult = {x: -12, y: 12};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getFrontLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 41, y: 41} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: 41, y: 41};
            const position = [5, 5];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })

    describe('.getFrontRightCoordinates', () => {
        it('returns {x: 24, y: 48} when rotation is 0 degrees', () => {
            const expectedResult = {x: 24, y: 48};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getFrontRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 12} when rotation is 90 degrees', () => {
            const expectedResult = {x: 36, y: 12};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 0, y: 0} when rotation is 180 degrees', () => {
            const expectedResult = {x: 0, y: 0};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getFrontRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 36} when rotation is 270 degrees', () => {
            const expectedResult = {x: -12, y: 36};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getFrontRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 41, y: 17} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: 41, y: 17};
            const position = [5, 5];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })

    describe('.getBackRightCoordinates', () => {
        it('returns {x: 24, y: 0} when rotation is 0 degrees', () => {
            const expectedResult = {x: 24, y: 0};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getBackRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 12} when rotation is 90 degrees', () => {
            const expectedResult = {x: -12, y: 12};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -0, y: 48} when rotation is 180 degrees', () => {
            const expectedResult = {x: -0, y: 48};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getBackRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 36} when rotation is 270 degrees', () => {
            const expectedResult = {x: 36, y: 36};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getBackRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -7, y: 17} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: -7, y: 17};
            const position = [5, 5];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackRightCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })
    
    describe('.getBackLeftCoordinates', () => {
        it('returns {x: -0, y: 0} when rotation is 0 degrees', () => {
            const expectedResult = {x: -0, y: 0};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getBackLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 36} when rotation is 90 degrees', () => {
            const expectedResult = {x: -12, y: 36};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 24, y: 48} when rotation is 180 degrees', () => {
            const expectedResult = {x: 24, y: 48};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getBackLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 12} when rotation is 270 degrees', () => {
            const expectedResult = {x: 36, y: 12};
            const position = [0, 0];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getBackLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -7, y: 41} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: -7, y: 41};
            const position = [5, 5];
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackLeftCoordinates();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })
})