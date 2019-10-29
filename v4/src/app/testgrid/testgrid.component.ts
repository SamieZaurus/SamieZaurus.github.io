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
  public projectOpen: boolean;
  constructor() {}

  ngOnInit() {  
    this.projectOpen = false;
  }
  public projectSwitcher(event: any) {
    let elems = document.getElementsByClassName("test-grid-box");
    let parentGrid = document.getElementById('grid');
    let elem = event.target.parentElement.firstChild;
    let parentElem = event.target.parentElement;
    console.log();
    console.log(event.target);
    if (!this.projectOpen) {
      for (let x = 0; x < elems.length; x++) {
        var elem1 = < HTMLElement > elems[x];
        elem1.style.gridColumn = "";
        elem1.style.gridRow = "";
        elem1.style.display = "none";
      }
      elem.style.transform = "scale(1)";
      parentGrid.style.gridRow = "1fr";
      parentGrid.style.gridColumn = "1fr";
      parentElem.style.width = "auto";
      parentElem.style.height = "auto";
      parentElem.style.display = "initial";
      this.projectOpen = true;
    }
    else{
      parentGrid.style.gridTemplateColumns = "max-content max-content max-content";
      parentGrid.style.gridTemplateRows = "";
      elem.style.transform = "scale(calc(1/3)";
      for (let x = 0; x < elems.length; x++) {
        var elem1 = < HTMLElement > elems[x];
        elem1.style.animation = "";
        elem1.style.display = "initial";
        elem1.style.width = "250px";
        elem1.style.height = "250px";
        elem1.style.gridColumn = "";
        elem1.style.gridRow = "";
      }
      this.projectOpen = false;
    }

    // this.prevElement = elem;
  }

}
