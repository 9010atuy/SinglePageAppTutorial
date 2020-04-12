import { Component } from '@angular/core';
import { items } from '../items';

@Component({
    selector: 'app-items-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
 })

 export class ItemListComponent {
     items = items;
     
     share() {
        alert('shared!');
     }
}
