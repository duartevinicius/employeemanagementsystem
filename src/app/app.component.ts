import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Selecao Brasileira 2006';
    items: MenuItem[];
    activeItem: MenuItem;
    ngOnInit() {
        this.items = [
            {label: 'Projetos', routerLink: '/projects'},
            {label: 'Desenvolvedores', routerLink: '/employees'},
            
        ];
        this.activeItem = this.items[1];
    }
}
