import { Component, OnInit } from '@angular/core';
import { Premium } from '../../models/premium';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'hex-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

    premium = new Premium();

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.premium = this.dataService.getPremium();
    }

}
