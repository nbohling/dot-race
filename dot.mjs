class Dot {
    constructor (parent) {
        if (parent) {
            this._parent = parent;
            this._parent.appendChild(this._element);
        }
        this._element = document.createElement('div');
        this._element.classList.add('dot');
        this._position = {
            x: Math.random() * (this._parent.offsetHeight - 24),
            y: Math.random() * (this._parent.offsetWidth - 24)
        };
        this._radius = this._element.offsetWidth / 2;
        this._element.style.bottom = `${this._position.x}px`;
        this._element.style.left = `${this._position.y}px`;
    }

    isTouchingCar (car) {
        const center = {
            x: this._position.x + this._radius,
            y: this._position.y + this._radius
        }
        for (const corner of car.corners) {
            if (r ** 2 <= (center.x - corner.x) ** 2 + (center.y - corner.y) ** 2) {
                return true;
            }
        }
        return false;
    }
}

export { Dot }