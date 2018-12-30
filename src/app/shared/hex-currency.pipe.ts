import { Pipe, PipeTransform } from '@angular/core';
import { decimal, toDecimal, textToDecimal, toNumber } from './decimal';
import { CurrencyPipe } from '@angular/common';

let pipe = new CurrencyPipe("en-AU");

@Pipe({
    name: 'hexCurrency'
})
export class HexCurrencyPipe implements PipeTransform {

    transform(value: decimal | string | null): string {
        if (value === null) return "";
        if (typeof value === "string") return this.transform(textToDecimal(value));
        return pipe.transform(toNumber(value), "AUD","symbol-narrow", "1.2-2")
    }

}
