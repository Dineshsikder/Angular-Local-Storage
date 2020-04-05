import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import FormUtil from 'src/app/shared/util/form-util';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  data:string;
  projectForm: FormGroup;
  markAsTouch = FormUtil.markAsTouch;
  isFieldValid = FormUtil.isFieldValid;
  isErrorExists = FormUtil.isErrorExist;
//for local storage
  project;
  text;
  oldProject;
  state:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {

    this.projectForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.project = this.projectService.getProject();
    console.log("project",this.project);

  }

  get firstName() { return this.projectForm.get("firstName") };
  get lastName() { return this.projectForm.get("lastName") };

  submit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      localStorage.setItem(this.data,this.projectForm.value)
      this.router.navigate(["view-project",this.projectForm.value]);
      console.log("local", localStorage.getItem(this.data));
    } else {
      this.markAsTouch(this.projectForm)
    }
  }


//local storage
addProject() {
  // let newproject = {
  //   text: this.text
  // }
  // this.project.push(newproject);
  let newproject = this.text;
  this.projectService.addProject(newproject);
  this.project = this.projectService.getProject();
}

deleteProject(removeProject) {
  for(let i = 0; i < this.project.length; i++) {
    if(this.project[i] == removeProject) {
        this.project.splice(i, 1);
    }
  }
  this.projectService.deleteProject(removeProject);
  //this.project = this.projectService.getProject();
}

editProject(project) {
  this.state = true;
  this.oldProject = project;
  this.text = project;
}

updateProject() {
  console.log(this.text);
      for(let i = 0; i < this.project.length; i++) {
        if(this.project[i] == this.oldProject) {
        this.project[i] = this.text;
    }
}

this.projectService.updateProject(this.oldProject, this.text);

}


}
