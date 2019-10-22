import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-testgrid',
  templateUrl: './testgrid.component.html',
  styleUrls: ['./testgrid.component.scss']
})
export class TestgridComponent implements OnInit {
  public prevElement: HTMLElement;
  constructor() {}

  ngOnInit() {

  }
  public projectSwitcher(event: any) {
    let elems = document.getElementsByClassName("test-grid-box");
    let elem = event.target;
    for (let x = 0; x < elems.length; x++) {
      var elem1 = < HTMLElement > elems[x];
      elem1.style.gridColumn = "1/2";
      elem1.style.gridRow = "initial";
      elem1.style.animation = "";
        elem1.style.animation = "blow-up 0.4s ease-out";
    }
  
    elem.style.gridRow = "1/4";
    elem.style.gridColumn = "2/3";
    elem.style.animation = "blow-up 0.4s ease-out";


    // this.prevElement = elem;
  }

}
