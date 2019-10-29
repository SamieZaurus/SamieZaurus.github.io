import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import {
  ForgeViewerScriptService
} from '../services/forgeviewerscript.service';
import {
  environment
} from 'src/environments/environment';
import { Observable } from 'rxjs';
export abstract class ViewerEventArgs {
  target?: Autodesk.Viewing.Viewer3D;
  model?: Autodesk.Viewing.ViewerItem;
  type: string;
  [key: string]: any;
}
export class SelectionChangedEventArgs extends ViewerEventArgs {
  fragIdsArray: number[];
  dbIdArray: number[];
  nodeArray: number[];
  type = Autodesk.Viewing.SELECTION_CHANGED_EVENT;
}
@Component({
  selector: 'dura-viewer',
  templateUrl: './dura-viewer.component.html',
  styleUrls: ['./dura-viewer.component.scss']
})

export class DuraViewerComponent implements OnInit {

  @Output() 
  public onSelectionChanged = new EventEmitter<number[]>();
  private viewer: Autodesk.Viewing.GuiViewer3D = null;
  private urn: string = "";
  constructor(private scriptService: ForgeViewerScriptService, private elem: ElementRef) {}
  @Input() public set documentUrn(urn: string){
    this.urn = urn;
  }
  async ngOnInit() {

    this.initViewer();


  }
  private async initViewer() {

    await this.loadScripts();

    var options = {
      env: 'AutodeskProduction',
      api: 'derivativeV2', // for models uploaded to EMEA change this option to 'derivativeV2_EU'
      getAccessToken: function (onTokenReady) {
        var token = environment.forgekey;
        var timeInSeconds = environment.timeout; // Use value provided by Forge Authentication (OAuth) API
        onTokenReady(token, timeInSeconds);
      }
    };

    Autodesk.Viewing.Initializer(options, () => {

      let htmlDiv = this.elem.nativeElement.firstChild;
      this.viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
      var startedCode = this.viewer.start();
      if (startedCode > 0) {
        console.error('Failed to create a Viewer: WebGL not supported.');
        return;
      }

      console.log('Initialization complete, loading a model next...');
      this.onViewerSucces();
    });
  }
  private onViewerSucces(){
    Autodesk.Viewing.Document.load(this.urn, (x) => {this.onDocumentLoadSucces(x)}, (x) => {console.log("Something went wrong")});
  }
  private onDocumentLoadSucces(viewerDocument: Autodesk.Viewing.Document){

    let defaultModel = viewerDocument.getRoot().getDefaultGeometry();
    this.viewer.loadDocumentNode(viewerDocument, defaultModel);   
    this.registerEvents();   
  }
  public registerEvents(){

    this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, (event) => {this.onSelectionChanged.emit(event.dbIdArray)});

  }
  private loadScripts(): Promise < void > {

    return this.scriptService.load('https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js');

  }

}

