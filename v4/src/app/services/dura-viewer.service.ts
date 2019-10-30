import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ForgeViewerEvent, SelectionChangedEvent, IsolateEvent } from '../models/model';



@Injectable({
  providedIn: 'root'
})
export class DuraViewerService {
  public $events = new Subject<ForgeViewerEvent>();
  public eventMap: { [key: string]: Function } = {};
  public viewer: Autodesk.Viewing.Viewer3D = null;
  public viewerLoaded: boolean = false;
  constructor() {
    this.registerTypes();
  }
  // expose viewer from base component to service for usage, used for traversing nodes and saving info to the repo and or component.
  public registerViewer(viewer: Autodesk.Viewing.Viewer3D) {

    this.viewer = viewer;
    this.viewerLoaded = true;
  }
  public registerTypes() {
    this.eventMap['selection'] = SelectionChangedEvent;
    this.eventMap['isolate'] = IsolateEvent;
  }
  public getSelectedItems(): number[] {

    if (this.viewerLoaded) {
      return this.viewer.getSelection();
    }
    console.error('Wait for viewer to load before making calls to this method, you could also handle the selection changed event in the component itself.');
  }

  public setCurrentEvent(event: ForgeViewerEvent) {

    this.$events.next(event);
  }
  public castEvent(event: any): ForgeViewerEvent {
    let eventType = this.eventMap[event.type];
    let typedEvent = Object.create(eventType.prototype);
    for (let key of Object.keys(event)) {

      typedEvent[key] = event[key];

    }
    return typedEvent;
  }
}
