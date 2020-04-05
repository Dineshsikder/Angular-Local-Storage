import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ViewProjectComponent } from './view-project/view-project.component';


const routes: Routes = [
  { path:"", component: ProjectDetailsComponent },
  { path:"project", component: ProjectDetailsComponent},
  { path: "view-project", component: ViewProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailsRoutingModule { }
