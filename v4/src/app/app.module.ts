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
    BestellenBimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ForgeViewerScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
