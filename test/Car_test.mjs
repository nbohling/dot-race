import assert from 'assert';
import { Car } from '../car.mjs';

describe('Car', () => {
    describe('.getFrontLeftCoordinates', () => {
        it('returns {x: -0, y: 48} when rotation is 0 degrees', () => {
            const expectedResult = {x: -0, y: 48};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getFrontLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 36} when rotation is 90 degrees', () => {
            const expectedResult = {x: 36, y: 36};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 24, y: 0} when rotation is 180 degrees', () => {
            const expectedResult = {x: 24, y: 0};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getFrontLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 12} when rotation is 270 degrees', () => {
            const expectedResult = {x: -12, y: 12};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getFrontLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 41, y: 41} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: 41, y: 41};
            const position = [5, 5];
            const center = {x: 17, y: 29};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })

    describe('.getFrontRightCoordinates', () => {
        it('returns {x: 24, y: 48} when rotation is 0 degrees', () => {
            const expectedResult = {x: 24, y: 48};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getFrontRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 12} when rotation is 90 degrees', () => {
            const expectedResult = {x: 36, y: 12};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 0, y: 0} when rotation is 180 degrees', () => {
            const expectedResult = {x: 0, y: 0};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getFrontRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 36} when rotation is 270 degrees', () => {
            const expectedResult = {x: -12, y: 36};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getFrontRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 41, y: 17} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: 41, y: 17};
            const position = [5, 5];
            const center = {x: 17, y: 29};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getFrontRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })

    describe('.getBackRightCoordinates', () => {
        it('returns {x: 24, y: 0} when rotation is 0 degrees', () => {
            const expectedResult = {x: 24, y: 0};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getBackRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 12} when rotation is 90 degrees', () => {
            const expectedResult = {x: -12, y: 12};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -0, y: 48} when rotation is 180 degrees', () => {
            const expectedResult = {x: -0, y: 48};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getBackRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 36} when rotation is 270 degrees', () => {
            const expectedResult = {x: 36, y: 36};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getBackRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -7, y: 17} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: -7, y: 17};
            const position = [5, 5];
            const center = {x: 17, y: 29};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackRightCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })
    
    describe('.getBackLeftCoordinates', () => {
        it('returns {x: -0, y: 0} when rotation is 0 degrees', () => {
            const expectedResult = {x: -0, y: 0};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            
            const actualResult = car.getBackLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -12, y: 36} when rotation is 90 degrees', () => {
            const expectedResult = {x: -12, y: 36};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 24, y: 48} when rotation is 180 degrees', () => {
            const expectedResult = {x: 24, y: 48};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 180;
            
            const actualResult = car.getBackLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: 36, y: 12} when rotation is 270 degrees', () => {
            const expectedResult = {x: 36, y: 12};
            const position = [0, 0];
            const center = {x: 12, y: 24};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 270;
            
            const actualResult = car.getBackLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns {x: -7, y: 41} when rotation is 90 degrees and position is [5, 5]', () => {
            const expectedResult = {x: -7, y: 41};
            const position = [5, 5];
            const center = {x: 17, y: 29};
            const car = new Car(undefined, undefined, position);
            car._currentRotation = 90;
            
            const actualResult = car.getBackLeftCoordinates(center);

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })

    describe('.getCorners', () => {
        it('returns all corners correctly when not rotated and centered', () => {
            const expectedResult = [{x: -0, y: 48}, {x: 24, y: 48}, {x: 24, y: 0}, {x: -0, y: 0}];
            const position = [0, 0];
            const car = new Car(undefined, undefined, position)

            const actualResult = car.getCorners();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns all corners correctly when rotated 90 degrees and centered', () => {
            const expectedResult = [{x: 36, y: 36}, {x: 36, y: 12}, {x: -12, y: 12}, {x: -12, y: 36}];
            const position = [0, 0];
            const car = new Car(undefined, undefined, position)
            car._currentRotation = 90

            const actualResult = car.getCorners();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns all corners correctly when not rotated and position is [5, 5]', () => {
            const expectedResult = [{x: 5, y: 53}, {x: 29, y: 53}, {x: 29, y: 5}, {x: 5, y: 5}];
            const position = [5, 5];
            const car = new Car(undefined, undefined, position)

            const actualResult = car.getCorners();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
        it('returns all corners correctly when rotated 90 degrees and position is [5, 5]', () => {
            const expectedResult = [{x: 41, y: 41}, {x: 41, y: 17}, {x: -7, y: 17}, {x: -7, y: 41}];
            const position = [5, 5];
            const car = new Car(undefined, undefined, position)
            car._currentRotation = 90

            const actualResult = car.getCorners();

            assert.deepStrictEqual(actualResult, expectedResult);
        })
    })
})