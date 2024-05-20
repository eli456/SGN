import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menú',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                ]
            },
            {
                items: [
              
                    {label: 'Productos', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/pages/crud']},
                    {label: 'Ingredientes', icon: 'pi pi-fw pi-table', routerLink: ['/pages/ingredientes']},
                    { label: 'Estadísticos', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    {label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: ['/pages/usuarios']},
                    
                ]

              
            },
            {
                items: [
                   
                    /*{
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },*/                    
                ]
            }, 
        ];
    }
}
