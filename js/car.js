class Car {
    constructor(parent, element, startPosition) {
        this._parent = parent;
        this._element = element;
        this._position = {x:startPosition[0], y:startPosition[1]};
        this._speed = 4;
        this._rotateSpeed = 4;
        this._direction = 0;
        this._rotateDirection = 0;
        this._currentRotation = 0;
        this.corners = this.getCorners();
        if (this._parent && this._element) {
            this._updateCSS();
        }
        this.height = this._element.offsetHeight;
        this.width = this._element.offsetWidth;
    }

    set position(newPosition) {
        this._position.x = newPosition[0];
        this._position.y = newPosition[1];
    }

    set direction(newDirection) {
        this._direction = newDirection;
    }

    set rotateDirection(newDirection) {
        const acceptableValues = [-1, 0, 1];
        if (acceptableValues.includes(newDirection)) {
            this._rotateDirection = newDirection;
        } else {
            console.error('invalid rotateDirection assigned');
        }
    }

    _updateCSS() {
        this._element.style.bottom = `${this._position.y}px`;
        this._element.style.left = `${this._position.x}px`;
        this._element.style.transform = `rotate(${Number(this._currentRotation)}deg)`;
    }

    _rotate() {
        const degrees = this._rotateSpeed * this._rotateDirection;
        if (this._currentRotation + degrees < 360) {
            this._currentRotation = Number(this._currentRotation) + degrees;
        } else {
            this._currentRotation += (-360 + degrees);
        }
    }

    _move() {
        const distances = this._getXYDistances(this._speed*this._direction, this._currentRotation);
        this._position.x += distances[0];
        this._position.y += distances[1];
    }

    _getXYDistances(d, angle) {
        const x = Math.sin(angle * (Math.PI / 180)) * d;
        const y = Math.cos(angle * (Math.PI / 180)) * d;
        return [x, y];
    }

    getFrontLeftCoordinates(center) {
        const angleRads = this._currentRotation * (Math.PI / 180);
        const height = this.height;
        const width = this.width;
        const rectAngle = Math.atan2(height / 2, width / 2);
        const rectDiag = Math.sqrt((width / 2) * (width / 2) + (height / 2) * (height / 2));

        return {
            x: Math.round((center.x - rectDiag * Math.cos(-rectAngle - angleRads)) * 1000) / 1000,
            y: Math.round((center.y - rectDiag * Math.sin(-rectAngle - angleRads)) * 1000) / 1000
        };
    }

    getFrontRightCoordinates(center) {
        const angleRads = this._currentRotation * (Math.PI / 180);
        const height = this.height;
        const width = this.width;
        const rectAngle = Math.atan2(height / 2, width / 2);
        const rectDiag = Math.sqrt((width / 2) * (width / 2) + (height / 2) * (height / 2));
        return {
            x: Math.round((center.x + rectDiag * Math.cos(rectAngle - angleRads)) * 1000) / 1000,
            y: Math.round((center.y + rectDiag * Math.sin(rectAngle - angleRads)) * 1000) / 1000
        };
    }

    getBackRightCoordinates(center) {
        const angleRads = this._currentRotation * (Math.PI / 180);
        const height = this.height;
        const width = this.width;
        const rectAngle = Math.atan2(height / 2, width / 2);
        const rectDiag = Math.sqrt((width / 2) * (width / 2) + (height / 2) * (height / 2));
        return {
            x: Math.round((center.x + rectDiag * Math.cos(-rectAngle - angleRads)) * 1000) / 1000,
            y: Math.round((center.y + rectDiag * Math.sin(-rectAngle - angleRads)) * 1000) / 1000
        };
    }

    getBackLeftCoordinates(center) {
        const angleRads = this._currentRotation * (Math.PI / 180);
        const height = this.height;
        const width = this.width;
        const rectAngle = Math.atan2(height / 2, width / 2);
        const rectDiag = Math.sqrt((width / 2) * (width / 2) + (height / 2) * (height / 2));
        return {
            x: Math.round((center.x - rectDiag * Math.cos(rectAngle - angleRads)) * 1000) / 1000,
            y: Math.round((center.y - rectDiag * Math.sin(rectAngle - angleRads)) * 1000) / 1000
        };
    }

    getCorners() {
        const centerPoint = {
            x: this._position.x + (this.width / 2), 
            y: this._position.y + (this.height / 2)
        };
        const corners = [
            this.getFrontLeftCoordinates(centerPoint),
            this.getFrontRightCoordinates(centerPoint),
            this.getBackRightCoordinates(centerPoint),
            this.getBackLeftCoordinates(centerPoint)
        ];
        return corners
    }

    _moveAwayFromWalls() {
        this.corners = this.getCorners();
        const screenWidth = this._parent.offsetWidth;
        const screenHeight = this._parent.offsetHeight;
        this.corners.forEach((corner) => {
            if (corner.x > screenWidth) {
                this._position.x -= (corner.x - screenWidth);
            } else if (corner.x < 0) {
                this._position.x -= corner.x;
            }
            if (corner.y > screenHeight) {
                this._position.y -= (corner.y - screenHeight);
            } else if (corner.y < 0) {
                this._position.y -= corner.y;
            }
        })
    }

    update() {
        if (this._direction !== 0) {
            this._move();
        }
        if ((this._rotateDirection !== 0)) {
            this._rotate();
        }
        this._moveAwayFromWalls();
        this._updateCSS();
    }
}

export default Car;