import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexCurrencyPipe } from './hex-currency.pipe';

@NgModule({
  declarations: [HexCurrencyPipe],
  exports: [HexCurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
