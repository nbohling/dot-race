class Dot {
    constructor (parent) {
        this.parent = parent;
        this.element = document.createElement('div');
        this.element.classList.add('dot');
        this.element.style.bottom = `${Math.random() * (this.parent.offsetHeight - 24)}px`;
        this.element.style.left = `${Math.random() * (this.parent.offsetWidth - 24)}px`;
        this.parent.appendChild(this.element);
    }
}

export { Dot }