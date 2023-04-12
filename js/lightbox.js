export default class Lightbox {
    constructor(id) {
        this.lightbox = document.getElementById(id);
    }

    show() {
        if (this.lightbox.classList.contains('hidden')) {
            this.lightbox.classList.remove('hidden');
        }
    }

    hide() {
        if (!this.lightbox.classList.contains('hidden')) {
            this.lightbox.classList.add('hidden');
        }
    }

    setBackgroundColor(color) {
        this.lightbox.style.backgroundColor = color;
    }

    setBackgroundGrad(grad) {
        this.lightbox.style.backgroundImage = grad;
    }
}