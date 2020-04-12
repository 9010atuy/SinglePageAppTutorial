import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemCartService{

    constructor(
        private http: HttpClient
    ) { };
    cartitems = [];

    addToItemCart(item){
        this.cartitems.push(item);
    }

    getItems(){
        return this.cartitems;
    }

    clearItemCart(){
        this.cartitems = [];
        return this.cartitems;
    }

    getShippingPrice() {
        return this.http.get('/assets/shipping.json');
    }
}