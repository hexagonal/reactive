import { decimal, toDecimal } from '../shared/decimal'

export class Premium {
    taxRate: decimal = toDecimal(10);
    fireRate: decimal = toDecimal(20);

    base: decimal = 0;
    baseTax: decimal = 0;
    get baseTotal(): decimal { return this.base + this.baseTax; }

    fire: decimal = 0;
    fireTax: decimal = 0;
    get fireTotal(): decimal { return this.fire + this.fireTax; }

    get premium(): decimal { return this.base + this.fire; }
    get premiumTax(): decimal { return this.baseTax + this.fireTax; }
    get premiumTotal(): decimal { return this.premium + this.premiumTax; }
}
