import {DOM} from './crudDOM';
import { Repository } from './repository';
import { Project } from './project';
import { Todo } from './todo';

document.addEventListener('DOMContentLoaded', () => {
  let setStorage = []
  /* localStorage.setItem("projects", JSON.stringify(setStorage)) */

    let projects = Repository.getProjects();
    DOM.initDomElements(projects);
    if (projects.length === 0) {
      /* const defaultProject = new Project('Default Project',  Math.random().toString(16).slice(2));
      projects.push(defaultProject); 
      Repository.saveProjects(projects);*/
  }
  
});