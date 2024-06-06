export class Project {
  constructor(name, id) { 
    this.name = name;
    this.id = id,
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodoById(id) {
    this.todos = this.todos.filter(e => e.id !== id)
  }
}