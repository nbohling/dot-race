class Dot {
    constructor (parent) {
        this._isActive = true;
        if (parent) {
            this._element = document.createElement('div');
            this._element.classList.add('dot');
            this._parent = parent;
            this._parent.appendChild(this._element);
            this._position = {
                x: Math.random() * (this._parent.offsetWidth - 24),
                y: Math.random() * (this._parent.offsetHeight - 24)
            };
            this._element.style.bottom = `${this._position.x}px`;
            this._element.style.left = `${this._position.y}px`;
            this._radius = this._element.offsetWidth / 2;
            console.log(this._radius);
        }
    }

    isTouchingCar (car) {
        // console.log('isTouchingCar()  ', car);
        const center = {
            x: this._position.x + this._radius,
            y: this._position.y + this._radius
        }
        // console.log('center  ', center);
        for (const corner of car.corners) {
            // console.log('corner   ', corner)
            // console.log('distance ', ((center.x - corner.x) ** 2) + ((center.y - corner.y) ** 2))
            if (Math.pow(this._radius) >= (center.x - corner.x) + (center.y - corner.y)) {
                return true;
            }
        }
        return false;
    }

    disappear () {
        this._element.hidden = true;
        this._isActive = false;
    }
}

export { Dot }