export class Todo {
  constructor(title,description, dueDate, priority, completed = false) {
    this.id = Math.random().toString(16).slice(2);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
}

}