import { Component, OnInit } from '@angular/core';
import { Premium } from '../../models/premium';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HexCurrencyPipe } from 'src/app/shared/hex-currency.pipe';
import { textToDecimal, decimal, toNumber, toDecimal } from 'src/app/shared/decimal';

enum PremiumField {
    None,
    Base,
    BaseTax,
    Fire,
    FireTax
}

@Component({
    selector: 'hex-class-driven',
    templateUrl: './class-driven.component.html',
    styleUrls: ['./class-driven.component.css']
})
export class ClassDrivenComponent implements OnInit {

    currencyPipe = new HexCurrencyPipe();
    currencyTransform = this.currencyPipe.transform;

    model = new Premium();

    premium = new FormGroup({
        base: new FormControl(''),
        baseTax: new FormControl(''),
        fire: new FormControl(''),
        fireTax: new FormControl('')
    });

    constructor(private dataService: DataService) { }

    listenForChanges(controlName: string, field: PremiumField) {
        this.premium.get(controlName).valueChanges.subscribe(value => {
            this.updateModel(field, textToDecimal(value));
            this.updateForm(field);
        });
    }

    ngOnInit() {
        this.model = this.dataService.getPremium();
        this.updateForm()

        this.listenForChanges("base", PremiumField.Base);
        this.listenForChanges("baseTax", PremiumField.BaseTax);
        this.listenForChanges("fire", PremiumField.Fire);
        this.listenForChanges("fireTax", PremiumField.FireTax);
    }

    updateModel(field: PremiumField, amount: decimal) {
        switch (field) {
            case PremiumField.Base:
                this.model.base = amount;
                this.updateModel(PremiumField.BaseTax, toDecimal(toNumber(amount) * (toNumber(this.model.taxRate) / 100)));
                this.updateModel(PremiumField.Fire, toDecimal(toNumber(amount) * (toNumber(this.model.fireRate) / 100)));
                break;
            case PremiumField.BaseTax:
                this.model.baseTax = amount;
                break;
            case PremiumField.Fire:
                this.model.fire = amount;
                this.updateModel(PremiumField.FireTax, toDecimal(toNumber(amount) * (toNumber(this.model.taxRate) / 100)));
                break;
            case PremiumField.FireTax:
                this.model.fireTax = amount;
                break;
        }
    }

    updateForm(field = PremiumField.None) {
        let value = {
            base: this.currencyTransform(this.model.base),
            baseTax: this.currencyTransform(this.model.baseTax),
            fire: this.currencyTransform(this.model.fire),
            fireTax: this.currencyTransform(this.model.fireTax)
        };

        switch (field) {
            case PremiumField.Base:
                delete value.base;
                break;
            case PremiumField.BaseTax:
                delete value.baseTax;
                break;
            case PremiumField.Fire:
                delete value.fire;
                break;
            case PremiumField.FireTax:
                delete value.fireTax;
                break;
        }

        this.premium.patchValue(value, { emitEvent: false });
    }

    save() {
        console.log("SAVING AN OBJECT:");
        console.log("Base: " + this.model.base);
        console.log("BaseTotal: " + this.model.baseTotal)
    }
}
