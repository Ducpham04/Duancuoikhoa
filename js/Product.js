class Product {
    constructor(code, price, status, size, description, image) {
        this._code = code;
        this._price = price;
        this._status = status;
        this._size = size;
        this._description = description;
        this._image = image;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}