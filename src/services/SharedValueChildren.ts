export class SharedValueChildren {
    private value: string;

    constructor(initialValue: string) {
        this.value = initialValue;
    }

    getValue() {
        return this.value;
    }

    setValue(newValue: string) {
        if (typeof newValue !== 'string' || newValue.length === 0) {
            throw new Error("Value must be a non-empty string");
        }
        this.value = newValue;
    }
}

export const sharedValueChildren = new SharedValueChildren("Valor inicial");