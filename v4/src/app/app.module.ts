import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TestgridComponent } from './testgrid/testgrid.component';
import { ProjectsComponent } from './projects/projects.component';
import { ForgeViewerScriptService } from './services/forgeviewerscript.service';
import { DuraViewerComponent } from './dura-viewer/dura-viewer.component';
import { BestellenBimComponent } from './bestellen-bim/bestellen-bim.component';
import { ProjectsV2Component } from './projects-v2/projects-v2.component';
import { DefaultProjectComponent } from './projects-v2/project-components/default-project/default-project.component';
import { AnalyserenComponent } from './projects-v2/project-components/analyseren/analyseren.component';
import { OntwerpenComponent } from './projects-v2/project-components/ontwerpen/ontwerpen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    TestgridComponent,
    ProjectsComponent,
    DuraViewerComponent,
    BestellenBimComponent,
    ProjectsV2Component,
    DefaultProjectComponent,
    AnalyserenComponent,
    OntwerpenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ForgeViewerScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
