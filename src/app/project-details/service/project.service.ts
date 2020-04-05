import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project : string[];
  constructor() {
    this.project = [
      // "hello",
      // "hi"
    ]
    localStorage.setItem('project',JSON.stringify(this.project));
   }

  
  getProject() {
    let projectList = JSON.parse(localStorage.getItem('project'));
    return projectList;
  }

  addProject(newProject) {
     //let project = JSON.parse(localStorage.getItem('project'));
     // Add New projectervice
     this.project.push(newProject);
     // Set New project
     localStorage.setItem('project', JSON.stringify(this.project));
    
  }

  deleteProject(removeProject) {
    let project = JSON.parse(localStorage.getItem('project'));

    for(let i = 0; i <project.length; i++) {
     if(project[i] == removeProject) {
         project.splice(i, 1);
     }
  }
     // Set New project
     localStorage.setItem('project', JSON.stringify(project));
  }

    updateProject(projects, newProject){  let project = JSON.parse(localStorage.getItem('project'));

    for(let i = 0; i <project.length; i++) {
     if(project[i] == projects) {
       project[i] = newProject;
     }
  }
     // Set New project
     localStorage.setItem('project', JSON.stringify(project));
  }


}
