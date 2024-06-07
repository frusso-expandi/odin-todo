import { Project } from "./project";
import { Todo } from "./todo";

export const Repository = {
  saveProjects(projects) {
    let pastProjects = this.getProjects();
    pastProjects.push(projects);
    localStorage.setItem("projects", JSON.stringify(pastProjects));
  },

  getProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) ?? [];
    return projects;
  },

  saveTodo(projectId, todo) {
    let alreadySavedProjects = this.getProjects();

    console.log(alreadySavedProjects);

    let projectToValorize = alreadySavedProjects
      .map((el, index) => ({ project: el, position: index }))
      .filter((el) => {
        if (el.project.id == projectId) {
          return el;
        }
      });

    projectToValorize[0].project.todos.push(todo);

    localStorage.setItem("projects", JSON.stringify([]));

    alreadySavedProjects.splice(
      projectToValorize[0].position,
      1,
      projectToValorize[0].project
    );

    localStorage.setItem("projects", JSON.stringify(alreadySavedProjects));
  },

  removeTodo(projectId, todo) {
    let alreadySavedProjects = Repository.getProjects();

    let projectToUpdate = alreadySavedProjects
      .map((el, index) => ({ project: el, position: index }))
      .filter((el) => {
        if (el.project.id == projectId) {
          return el;
        }
      });

    let todoIndexToDelete = projectToUpdate[0].project.todos.findIndex((el)=>el.id === todo.id)

    projectToUpdate[0].project.todos.splice(todoIndexToDelete, 1)

    localStorage.setItem("projects", JSON.stringify([]));
     
    alreadySavedProjects.splice(projectToUpdate[0].position ,1, projectToUpdate[0].project);

    localStorage.setItem("projects", JSON.stringify(alreadySavedProjects));
    
  }

}