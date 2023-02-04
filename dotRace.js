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
            this._currentRotation += (-360 + degrees)
        }
    }

    moveForward() {
        const distances = this._getXYDistances(this.speed, this._currentRotation);
        this._position.x += distances[0];
        this._position.y += distances[1];
    }

    _getXYDistances(d, angle) {
        const x = Math.sin(angle*(Math.PI / 180))*d;
        console.log(x);
        const y = Math.cos(angle*(Math.PI / 180))*d;
        console.log(y);
        return [x, y];
    }

    // _getRotationAngle() {
    //     // This function is taken from hoandang on github.com
    //     // https://gist.github.com/hoandang/5989980
    //     const target = this.element
    //     const obj = window.getComputedStyle(target, null);
    //     const matrix = obj.getPropertyValue('-webkit-transform') || 
    //         obj.getPropertyValue('-moz-transform') ||
    //         obj.getPropertyValue('-ms-transform') ||
    //         obj.getPropertyValue('-o-transform') ||
    //         obj.getPropertyValue('transform');
        
    //     let angle = 0; 
        
    //     if (matrix !== 'none') 
    //     {
    //         const values = matrix.split('(')[1].split(')')[0].split(',');
    //         const a = values[0];
    //         const b = values[1];
    //         angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    //     } 
        
    //     console.log("current rotation angle: " + angle);
    //     return /*(angle < 0) ? angle += 360 : */ angle;
    // }
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