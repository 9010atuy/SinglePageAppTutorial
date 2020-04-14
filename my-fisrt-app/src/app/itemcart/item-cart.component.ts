import { Component, OnInit } from "@angular/core";
import { ItemCartService } from "../itemcart.service";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-item-cart',
    templateUrl: './item-cart.component.html',
    styleUrls: ['./item-cart.component.scss']
})

export class ItemCartComponent implements OnInit {
    items;
    checkOutForm;
    constructor(
        private itemCartService: ItemCartService,
        private formBuilder: FormBuilder
    ) {
        this.checkOutForm = this.formBuilder.group({
            name: '',
            address: ''
        })
    };

    ngOnInit() {
        this.items = this.itemCartService.getItems();
    }

    onSubmit(customerData) {
        this.items = this.itemCartService.clearItemCart();
        this.checkOutForm.reset();

        console.warn('Your order has been submit!');
    }
}

