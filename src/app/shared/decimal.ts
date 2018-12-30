export type decimal = number;

function round(x: number): number {
    return Math.sign(x) * Math.round(Math.abs(x));
}

export function toDecimal(x: number): decimal {
    return round(x * 100);
}

export function toNumber(x: decimal): number {
    return x / 100;
}

export function textToDecimal(text: string): decimal {
    if (text === null) return 0;

    text = text.replace("$", "");
    text = text.replace(" ", "");
    text = text.replace(",", "");

    let x = Number.parseInt(text);
    return isNaN(x) ? 0 : toDecimal(x);
}
