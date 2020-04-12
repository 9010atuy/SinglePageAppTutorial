import { Component, OnInit } from "@angular/core";
import { ItemCartService } from "../itemcart.service";
@Component({
    selector: 'app-item-cart',
    templateUrl: './item-cart.component.html',
    styleUrls: ['./item-cart.component.scss']
})

export class ItemCartComponent implements OnInit {
    items;
    constructor(
        private itemCartService: ItemCartService
    ) {};

    ngOnInit() {
        this.items = this.itemCartService.getItems();
    }
}

