import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    @Input() item;
    // EventEnmitter: イベントの放出
    // 
    @Output() notify = new EventEmitter();
    constructor() { };

    ngOnInit() {

    }
}
