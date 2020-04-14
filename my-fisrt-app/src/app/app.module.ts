import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { ItemDetailComponent } from './itemdetail/itemdetail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCartComponent } from './itemcart/item-cart.component';
import { ItemShippingComponent } from './item-shipping/item-shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCartComponent,
    ItemShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: '', component: ItemListComponent }  ,
    // [:]：パラメーターを表す。以下の通りに遷移元からパラメーターを渡す
    // [routerLink]="['/items', itemId]" -> /items/<itemId>
    {path: 'items/:itemId', component: ItemDetailComponent},
    {path: 'itemcart', component: ItemCartComponent},
    {path: 'itemshipping', component: ItemShippingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
