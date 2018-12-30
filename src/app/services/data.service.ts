import { Injectable } from '@angular/core';
import { Premium } from '../models/premium';
import { toDecimal } from '../shared/decimal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPremium(): Premium {
      let prem = new Premium();
      prem.base = toDecimal(100);
      prem.baseTax = toDecimal(10);
      prem.fire = toDecimal(20);
      prem.fireTax = toDecimal(2);
      return prem;
  }
}
