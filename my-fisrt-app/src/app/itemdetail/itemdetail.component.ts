import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../items';
import { ItemCartService } from '../itemcart.service';

@Component({
    selector: 'app-itemdetail',
    templateUrl: './itemdetail.component.html',
    styleUrls: ['./itemdetail.component.scss']
})
export class ItemDetailComponent implements OnInit {
    item;
    constructor(
        private route: ActivatedRoute,
        private itemCartService: ItemCartService
    ) { 
    };

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.item = items[+params.get('itemId')];
        })
    }

    addToItemCart(item) {
        this.itemCartService.addToItemCart(item);
        alert('selected item in your cart!');
    }
}
