
export class NumberClassError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, NumberClassError.prototype);
    }
}

export class DataArrayError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, DataArrayError.prototype);
    }
}