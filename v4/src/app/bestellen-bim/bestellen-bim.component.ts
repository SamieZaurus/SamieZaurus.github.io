import { Component, OnInit } from '@angular/core';
import { DuraViewerService } from '../services/dura-viewer.service';
import { Subscription } from 'rxjs';
import { ForgeViewerEvent, SelectionChangedEvent, IsolateEvent, ForgeViewerOptions, ViewerInitArgs } from '../models/model';

@Component({
  selector: 'app-bestellen-bim',
  templateUrl: './bestellen-bim.component.html',
  styleUrls: ['./bestellen-bim.component.scss']
})
export class BestellenBimComponent implements OnInit {

  public eventSubscription: Subscription;

  public forgeViewerOptions: ForgeViewerOptions;

  public selectedItems: number[];

  constructor(private duraViewerService: DuraViewerService) { }

  ngOnInit() {
    this.forgeViewerOptions = {
      // We can do this.setUrn.bind(this)  instead to expose functions of this component to setUrn, the scope is normally situated at the base component.
      onViewerReady: this.setUrn
    }
    // subscribe to events fired by the viewer
    this.eventSubscription = this.duraViewerService.$events.subscribe((item) => {this.fireEvent(item)})
  }
  ngOnDestroy(){

    this.eventSubscription.unsubscribe();

  }
  public setUrn(args: ViewerInitArgs){
    let urn = 'urn:dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmFMQk9yNEhqUjF5NHI0U3JtU1Z5anc_dmVyc2lvbj0x';
    args.baseComponent.documentUrn = urn;
    args.baseComponent.loadModel(urn);

  }
  public displayItems(items: number[]){

    console.log(items);

  }
  public fireEvent(event: ForgeViewerEvent){

    if(event instanceof SelectionChangedEvent){
      if(event.dbIdArray.length > 0){
        console.log('Item(s) selected with id(s) ' + event.dbIdArray);
      }
    }
    if(event instanceof IsolateEvent){
      if(event.nodeIdArray.length > 0){
        console.log('Item(s) isolated with id(s) ' + event.nodeIdArray)
      }
    }

  }
}
