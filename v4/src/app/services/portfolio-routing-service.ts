import { Injectable } from '@angular/core';
import { element } from 'protractor';


@Injectable({
    providedIn: 'root'
})
export class PortfolioRoutingService{

    constructor(){

    }
    public registerRoutes(){

        let nav: Element = document.getElementsByClassName('project-nav')[0];
        let navigateables = document.getElementsByClassName('navigateable');
        let childrenCount: number = nav.children.length;
        for(let x = 0; x < childrenCount; x++){

            nav.children[x].addEventListener('click', (event) => {navigateables[x].scrollIntoView({behavior: 'smooth'})});

        } 

    }

}