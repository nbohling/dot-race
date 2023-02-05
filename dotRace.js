class Car {
    constructor(element, startPosition) {
        this.element = element;
        this._position = {x:startPosition[0], y:startPosition[1]};
        this.speed = 4;
        this._currentRotation = 0;
        this.updateCSS();
    }

    set position(newPosition) {
        this._position.x = newPosition[0];
        this._position.y = newPosition[1];
    }

    updateCSS() {
        this.element.style.bottom = `${this._position.y}px`;
        this.element.style.left = `${this._position.x}px`;
        this.element.style.transform = `rotate(${Number(this._currentRotation)}deg)`;
    }

    rotate(degrees) {
        // const currentRotation = this._getRotationAngle(this.element);
        if (this._currentRotation+degrees < 360) {
            this._currentRotation = Number(this._currentRotation) + degrees;
        } else {
            this._currentRotation += (-360 + degrees);
        }
    }

    moveForward() {
        const distances = this._getXYDistances(this.speed, this._currentRotation);
        this._position.x += distances[0];
        this._position.y += distances[1];
    }

    _getXYDistances(d, angle) {
        const x = Math.sin(angle * (Math.PI / 180)) * d;
        const y = Math.cos(angle * (Math.PI / 180)) * d;
        return [x, y];
    }
}

const car1Element = document.getElementById('player-one');
const car2Element = document.getElementById('player-two');
const car1 = new Car(car1Element, [500, 500]);
const car2 = new Car(car2Element, [500, 500]);
const update = () => {
    car1.rotate(2);
    car1.moveForward();
    car1.updateCSS();
}

setInterval(update, 8)
update();