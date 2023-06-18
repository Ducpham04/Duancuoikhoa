class Product {
    constructor(code, price, status, size, description, image) {
        this.code = code;
        this.price = price;
        this.status = status;
        this.size = size;
        this.description = description;
        this.image = image;
    }

    get code() {
        return this.code;
    }

    set code(value) {
        this.code = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get status() {
        return this.status;
    }

    set status(value) {
        this.status = value;
    }

    get size() {
        return this.size;
    }

    set size(value) {
        this.size = value;
    }

    get description() {
        return this.description;
    }

    set description(value) {
        this.description = value;
    }

    get image() {
        return this.image;
    }

    set image(value) {
        this.image = value;
    }
}