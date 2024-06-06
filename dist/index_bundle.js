/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/crudDOM.js":
/*!***************************!*\
  !*** ./src/js/crudDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./src/js/repository.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n\r\n\r\n\r\n\r\nconst DOM = {\r\n  initDomElements() {\r\n    this.initializeObjs();\r\n    this.initializeRefs();\r\n    this.initalizeListeners();\r\n    this.renderProjects();\r\n  },\r\n\r\n  initializeRefs() {\r\n    this.todoList = document.getElementById(\"todo-list\");\r\n    this.projectList = document.getElementById(\"project-list\");\r\n    this.projectSelect = document.getElementById(\"projectSelect\");\r\n    this.todoForm = document.getElementById(\"add-todo-form\");\r\n    this.projectForm = document.getElementById(\"add-project-form\");\r\n    this.addProjectBtn = document.getElementById(\"add-project-btn\");\r\n    this.addTodoBtn = document.getElementById(\"add-todo-btn\");\r\n  },\r\n\r\n  initalizeListeners() {\r\n    this.projectForm.addEventListener(\"change\", this.handleForms.bind(this));\r\n    this.todoForm.addEventListener(\"change\", this.handleForms.bind(this));\r\n    this.addProjectBtn.addEventListener(\"click\", () => {\r\n      this.addProject();\r\n    });\r\n    this.addTodoBtn.addEventListener(\"click\", () => {\r\n      this.addTodo();\r\n    });\r\n  },\r\n\r\n  initializeObjs() {\r\n    todoObj = {\r\n      id: \"\",\r\n      title: \"\",\r\n      description: \"\",\r\n      dueDate: \"\",\r\n      priority: \"\",\r\n      completed: false,\r\n      projectId : _repository__WEBPACK_IMPORTED_MODULE_1__.Repository.getProjects().slice(-1).id ?? ''\r\n    };\r\n\r\n    projectObj = {\r\n      projectName: \"\",\r\n    };\r\n  },\r\n\r\n  renderProjects() {\r\n    let projects = _repository__WEBPACK_IMPORTED_MODULE_1__.Repository.getProjects();\r\n    this.projectList.innerHTML = \"\";\r\n    this.projectSelect.innerHTML = \"\";\r\n    projects.forEach((project) => {\r\n      const projectElement = document.createElement(\"button\");\r\n      projectElement.textContent = project.name;\r\n      projectElement.addEventListener('click', () => this.renderTodo(project)); \r\n      this.projectList.appendChild(projectElement);\r\n\r\n      const optionElement = document.createElement(\"option\");\r\n      optionElement.selected = true\r\n      optionElement.value = project.id;\r\n      optionElement.textContent = project.name;\r\n      this.projectSelect.appendChild(optionElement);\r\n    });\r\n  },\r\n\r\n  renderTodo(project){\r\n    this.todoList.innerHTML = \"\";\r\n    project.todos.forEach((todo) => {\r\n\r\n      const todoCard = document.createElement(\"div\");\r\n      todoCard.classList.add(\"todo-card\");\r\n\r\n      const titleElement = document.createElement(\"h3\");\r\n      titleElement.textContent = todo.title;\r\n      todoCard.appendChild(titleElement);\r\n\r\n      const descriptionElement = document.createElement(\"p\");\r\n      descriptionElement.textContent = \"Description: \" + todo.description;\r\n      todoCard.appendChild(descriptionElement);\r\n\r\n      const dueDateElement = document.createElement(\"p\");\r\n      dueDateElement.textContent = \"Due Date: \" + todo.dueDate;\r\n      todoCard.appendChild(dueDateElement);\r\n\r\n      const priorityElement = document.createElement(\"p\");\r\n      priorityElement.textContent = \"Priority: \" + todo.priority;\r\n      todoCard.appendChild(priorityElement);\r\n\r\n      this.todoList.appendChild(todoCard);\r\n    })\r\n    \r\n  },\r\n\r\n  handleForms(event) {\r\n    if (event.currentTarget.id === \"add-project-form\") {\r\n      projectObj = { ...projectObj, [event.target.name]: event.target.value };\r\n      console.log(projectObj);\r\n    } else {\r\n      todoObj = { ...todoObj, [event.target.name]: event.target.value };\r\n      console.log(todoObj);\r\n    }\r\n  },\r\n\r\n  addProject() {\r\n    let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\r\n      projectObj.projectName,\r\n      Math.random().toString(16).slice(2)\r\n    );\r\n    _repository__WEBPACK_IMPORTED_MODULE_1__.Repository.saveProjects(newProject);\r\n    this.renderProjects();\r\n    this.initializeObjs();\r\n    this.projectForm.reset();\r\n  },\r\n\r\n  addTodo() {\r\n    var newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(\r\n      todoObj.title,\r\n      todoObj.description,\r\n      todoObj.dueDate,\r\n      todoObj.priority\r\n    );\r\n    _repository__WEBPACK_IMPORTED_MODULE_1__.Repository.saveTodo(todoObj.projectId, newTodo);\r\n   /*  this.initializeObjs(); */\r\n    this.projectForm.reset();\r\n    location.reload()\r\n  },\r\n};\r\n\r\nlet todoObj = {};\r\n\r\nlet projectObj = {};\r\n\n\n//# sourceURL=webpack://todolist/./src/js/crudDOM.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudDOM */ \"./src/js/crudDOM.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./src/js/repository.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  let setStorage = []\r\n  /* localStorage.setItem(\"projects\", JSON.stringify(setStorage)) */\r\n\r\n    let projects = _repository__WEBPACK_IMPORTED_MODULE_1__.Repository.getProjects();\r\n    _crudDOM__WEBPACK_IMPORTED_MODULE_0__.DOM.initDomElements(projects);\r\n    if (projects.length === 0) {\r\n      /* const defaultProject = new Project('Default Project',  Math.random().toString(16).slice(2));\r\n      projects.push(defaultProject); \r\n      Repository.saveProjects(projects);*/\r\n  }\r\n  \r\n});\n\n//# sourceURL=webpack://todolist/./src/js/index.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name, id) { \r\n    this.name = name;\r\n    this.id = id,\r\n    this.todos = []\r\n  }\r\n\r\n  addTodo(todo) {\r\n    this.todos.push(todo)\r\n  }\r\n\r\n  removeTodoById(id) {\r\n    this.todos = this.todos.filter(e => e.id !== id)\r\n  }\r\n}\n\n//# sourceURL=webpack://todolist/./src/js/project.js?");

/***/ }),

/***/ "./src/js/repository.js":
/*!******************************!*\
  !*** ./src/js/repository.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Repository: () => (/* binding */ Repository)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n\r\n\r\n\r\nconst Repository = {\r\n  saveProjects(projects) {\r\n    let pastProjects = this.getProjects();\r\n    pastProjects.push(projects);\r\n    localStorage.setItem(\"projects\", JSON.stringify(pastProjects));\r\n  },\r\n\r\n  getProjects() {\r\n    let projects = JSON.parse(localStorage.getItem(\"projects\")) ?? [];\r\n    return projects;\r\n  },\r\n\r\n  saveTodo(projectId, todo) {\r\n    let alreadySavedProjects = this.getProjects();\r\n\r\n    console.log(alreadySavedProjects)\r\n\r\n    let projectToValorize = alreadySavedProjects\r\n      .map((el, index) => ({ project: el, position: index }))\r\n      .filter((el) => {\r\n        if (el.project.id == projectId) {\r\n          return el;\r\n        }\r\n      });\r\n\r\n    projectToValorize[0].project.todos.push(todo);\r\n    \r\n    localStorage.setItem(\"projects\", JSON.stringify([]))\r\n\r\n    alreadySavedProjects.splice(\r\n      projectToValorize[0].position,\r\n      1,\r\n      projectToValorize[0].project\r\n    );\r\n\r\n    localStorage.setItem(\"projects\", JSON.stringify(alreadySavedProjects))\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://todolist/./src/js/repository.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n  constructor(title,description, dueDate, priority, completed = false) {\r\n    this.id = Math.random().toString(16).slice(2);\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.completed = completed;\r\n}\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/js/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;