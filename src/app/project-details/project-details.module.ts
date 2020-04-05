import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProjectComponent } from './view-project/view-project.component';


@NgModule({
  declarations: [ProjectDetailsComponent, ViewProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectDetailsRoutingModule
  ]
})
export class ProjectDetailsModule { }
