import { Project } from "./project";
import { Repository } from "./repository";
import { Todo } from "./todo";

export const DOM = {
  initDomElements() {
    this.initializeObjs();
    this.initializeRefs();
    this.initalizeListeners();
    this.renderProjects();
  },

  initializeRefs() {
    this.todoList = document.getElementById("todo-list");
    this.projectList = document.getElementById("project-list");
    this.projectSelect = document.getElementById("projectSelect");
    this.todoForm = document.getElementById("add-todo-form");
    this.projectForm = document.getElementById("add-project-form");
    this.addProjectBtn = document.getElementById("add-project-btn");
    this.addTodoBtn = document.getElementById("add-todo-btn");
  },

  initalizeListeners() {
    this.projectForm.addEventListener("change", this.handleForms.bind(this));
    this.todoForm.addEventListener("change", this.handleForms.bind(this));
    this.addProjectBtn.addEventListener("click", () => {
      this.addProject();
    });
    this.addTodoBtn.addEventListener("click", () => {
      this.addTodo();
    });
  },

  initializeObjs() {
    todoObj = {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      completed: false,
      projectId : Repository.getProjects().slice(-1).id ?? ''
    };

    projectObj = {
      projectName: "",
    };
  },

  renderProjects() {
    let projects = Repository.getProjects();
    this.projectList.innerHTML = "";
    this.projectSelect.innerHTML = "";
    projects.forEach((project) => {
      const projectElement = document.createElement("button");
      projectElement.textContent = project.name;
      projectElement.addEventListener('click', () => this.renderTodo(project)); 
      this.projectList.appendChild(projectElement);

      const optionElement = document.createElement("option");
      optionElement.selected = true
      optionElement.value = project.id;
      optionElement.textContent = project.name;
      this.projectSelect.appendChild(optionElement);
    });
  },

  renderTodo(project){
    this.todoList.innerHTML = "";
    project.todos.forEach((todo) => {

      const todoCard = document.createElement("div");
      todoCard.classList.add("todo-card");

      const titleElement = document.createElement("h3");
      titleElement.textContent = todo.title;
      todoCard.appendChild(titleElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = "Description: " + todo.description;
      todoCard.appendChild(descriptionElement);

      const dueDateElement = document.createElement("p");
      dueDateElement.textContent = "Due Date: " + todo.dueDate;
      todoCard.appendChild(dueDateElement);

      const priorityElement = document.createElement("p");
      priorityElement.textContent = "Priority: " + todo.priority;
      todoCard.appendChild(priorityElement);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("button-delete")
      deleteBtn.textContent = "delete"
      deleteBtn.addEventListener("click", ()=>{this.removeTodo(project.id, todo)})
      todoCard.appendChild(deleteBtn)


      this.todoList.appendChild(todoCard);
    })
    
  },

  handleForms(event) {
    if (event.currentTarget.id === "add-project-form") {
      projectObj = { ...projectObj, [event.target.name]: event.target.value };
      console.log(projectObj);
    } else {
      todoObj = { ...todoObj, [event.target.name]: event.target.value };
      console.log(todoObj);
    }
  },

  addProject() {
    let newProject = new Project(
      projectObj.projectName,
      Math.random().toString(16).slice(2)
    );
    Repository.saveProjects(newProject);
    this.renderProjects();
    this.initializeObjs();
    this.projectForm.reset();
  },

  addTodo() {
    var newTodo = new Todo(
      todoObj.title,
      todoObj.description,
      todoObj.dueDate,
      todoObj.priority
    );
    Repository.saveTodo(todoObj.projectId, newTodo);
   /*  this.initializeObjs(); */
    this.projectForm.reset();
    location.reload()
  },

  removeTodo(projectId, todo){
    Repository.removeTodo(projectId, todo);
    location.reload()
  }
};

let todoObj = {};

let projectObj = {};
