import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestellen-bim',
  templateUrl: './bestellen-bim.component.html',
  styleUrls: ['./bestellen-bim.component.scss']
})
export class BestellenBimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public onSelectionChanged(event: number[]){

    console.log(event);

  }
}
