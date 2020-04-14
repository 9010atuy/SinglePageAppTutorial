import {Component, OnInit } from '@angular/core';
import {ItemCartService} from '../itemcart.service';

@Component({
    selector: 'app-item-shipping',
    templateUrl: './item-shipping.component.html',
    styleUrls: ['./item-shipping.component.scss']
})

export class ItemShippingComponent implements OnInit {
    itemShippingCost;
    constructor(
        private itemCartService: ItemCartService
    ){};

    ngOnInit(){
        this.itemShippingCost = this.itemCartService.getShippingPrice();
    }
}