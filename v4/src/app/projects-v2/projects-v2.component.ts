import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-projects-v2',
  templateUrl: './projects-v2.component.html',
  styleUrls: ['./projects-v2.component.scss']
})
export class ProjectsV2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    let nav = document.getElementById('nav');
    let footer = document.getElementById('footer');
    nav.classList.remove('non-display');
    footer.classList.remove('non-display');

  }
  public toggleSubNav(event: any){
    console.log(event);
    let sideNavMain: HTMLElement = event.srcElement.parentElement;
    let sideNavSub: HTMLElement = event.srcElement.nextSibling;
    let sideNavMainArrow: HTMLElement = event.srcElement.firstElementChild;
    sideNavSub.classList.toggle('open');
    sideNavMain.classList.toggle('active-category');
    sideNavMainArrow.classList.toggle('open-arrow');
  }
  public toggleSideNav(event: any){

    let sideNav: Element = document.getElementsByClassName('projectV2sidenav')[0];
    let projects = document.getElementsByClassName('projectV2projects')[0];
    sideNav.classList.toggle('side-nav-open');
    if(projects.classList[1]){

      

    }
    let elems = document.getElementsByClassName('hide-on-fullscreen');
    for(let x = 0; x < elems.length; x++){

      elems[x].classList.toggle('non-display');

    }
    
  }
  public toggleFullscreen(event: any){

    let nav = document.getElementById('nav');
    let footer = document.getElementById('footer');
    let elems = document.getElementsByClassName('hide-on-fullscreen');
    let navToggler = document.getElementsByClassName('toggler-side-menu')[0];
    navToggler.classList.toggle('visible');
    nav.classList.toggle('non-display');
    footer.classList.toggle('non-display');
    for(let x = 0; x < elems.length; x++){
      if(footer.classList[1]){
        elems[x].classList.add('non-display');
      }
      else{
        elems[x].classList.remove('non-display');
      }
      

    }
    event.srcElement.classList.toggle('fa-expand');
    event.srcElement.classList.toggle('fa-compress');
  
    event.srcElement.parentElement.parentElement.classList.toggle('blow-up');
    event.srcElement.parentElement.parentElement.classList.toggle('full-view');
    
  }
}
