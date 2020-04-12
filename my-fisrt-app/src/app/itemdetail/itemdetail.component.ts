import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../items';

@Component({
    selector: 'app-itemdetail',
    templateUrl: './itemdetail.component.html',
    styleUrls: ['./itemdetail.component.scss']
})
export class ItemDetailComponent implements OnInit {
    item;
    constructor(
        private route: ActivatedRoute,
    ) { 
    };

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.item = items[+params.get('itemId')];
        })
    }
}
