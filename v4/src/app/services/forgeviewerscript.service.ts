import {
    Injectable
} from "@angular/core";




@Injectable()
export class ForgeViewerScriptService {
    private scripts:{[key: string]: Promise<void>} = {};

    constructor() {

    }
    public load(url: string): Promise<void> {
        if(this.scripts[url]){
            return this.scripts[url];
        }
        this.scripts[url] = new Promise<void>((resolve, reject)=>{
        let  scriptELem = document.createElement('script');
        scriptELem.type = 'text/javascript'
        scriptELem.src = url;
        scriptELem.onload = () => 
            resolve();
            scriptELem.onerror = (error: any) => resolve();
            document.getElementsByTagName('head')[0].appendChild(scriptELem);

        });
        return this.scripts[url];

        // urls.forEach((src => {
        //     if (this.scripts[src] && this.scripts[src].loaded) {
        //         return;
        //     }
        //     this.scripts[src] = { url: src, loaded: false };
        //     return promises.push(this.loadScript(src));
        // }))
        // return Promise.all(promises);
    }
    // public loadScript(name: string): Promise<ScriptInfo> {
    //     return new Promise((resolve, reject) => {
    //         if (this.scripts[name] && this.scripts[name].loaded) {
    //             resolve({
    //                 url: name,
    //                 loaded: true,
    //                 status: 'Already loaded'
    //             })
    //             return;
    //         }
    //         this.scriptELem = document.createElement('script');
    //         this.scriptELem.type = 'text/javascript'
    //         this.scriptELem.src = this.scripts[name].url;
    //         this.scriptELem.onload = () => {

    //             this.scripts[name].loaded = true;
    //             resolve({
    //                 url: name,
    //                 loaded: true,
    //                 status: 'Script loaded'
    //             })
    //         }
    //         this.scriptELem.onerror = (error: any) => resolve({
    //             url: name,
    //             loaded: false,
    //             status: 'Script could not be loaded'
    //         })
    //         document.getElementsByTagName('head')[0].appendChild(this.scriptELem);
    //     })
    // }
}
