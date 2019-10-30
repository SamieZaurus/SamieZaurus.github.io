import { DuraViewerComponent } from '../dura-viewer/dura-viewer.component';

export abstract class ForgeViewerEvent {

    target?: Autodesk.Viewing.Viewer3D;
    model?: Autodesk.Viewing.ViewerItem;
    type: string;

}
export class SelectionChangedEvent extends ForgeViewerEvent {

    type = Autodesk.Viewing.SELECTION_CHANGED_EVENT;
    fragIdsArray: number[];
    dbIdArray: number[];
    nodeArray: number[];

}
export class IsolateEvent extends ForgeViewerEvent{
    type = Autodesk.Viewing.ISOLATE_EVENT;
    nodeIdArray: number[];
}
export interface ForgeViewerOptions{

    onViewerReady: (args: ViewerInitArgs) => void;
}
export interface ViewerInitArgs{

    baseComponent: DuraViewerComponent;
    viewer: Autodesk.Viewing.Viewer3D;

}