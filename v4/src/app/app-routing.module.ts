import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestgridComponent } from './testgrid/testgrid.component';
import { ProjectsComponent } from './projects/projects.component';
import { BestellenBimComponent } from './bestellen-bim/bestellen-bim.component';
import { ProjectsV2Component } from './projects-v2/projects-v2.component';


const routes: Routes = [
  {
    path: 'viewer',
    component: BestellenBimComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'test',
    component: TestgridComponent
  },
  {
    path: 'projects',
    component: ProjectsV2Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
