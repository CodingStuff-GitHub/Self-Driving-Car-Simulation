class Controls {
    //Constructor
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;
        this.#addKeybroadListeners();
    }
    #addKeybroadListeners() {
        //On pressing the keys
        document.onkeydown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
            }
            console.table(this);
        }
        //On releasing the keys
        document.onkeyup = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
            }
            console.table(this);
        }
    }
}