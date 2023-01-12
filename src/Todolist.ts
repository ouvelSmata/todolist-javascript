export class Todolist {
  todolist: string[] = [];

  private removeTodolist(): void {
    const todoBody = document.getElementById("todoBody");
    while (todoBody.firstChild) {
      todoBody.removeChild(todoBody.firstChild);
    }
  }

  private deleteTodolist(index: number): void {
    this.todolist.splice(index, 1);
    this.displayTodolist();
  }

  private addTodolist(index: number, todo: string) {
    const trTodo = document.createElement("tr");
    const tdButton = document.createElement("td");
    trTodo.appendChild(tdButton);

    const button = document.createElement("input");
    button.type = "button";
    button.value = "Done";
    button.onclick = (): void => {
      this.deleteTodolist(index);
    };

    tdButton.appendChild(button);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    trTodo.appendChild(tdTodo);

    const todoBody = document.getElementById("todoBody");
    todoBody.appendChild(trTodo);
  }

  displayTodolist = (): void => {
    this.removeTodolist();

    for (let i = 0; i < this.todolist.length; i++) {
      const todo = this.todolist[i];

      const filter = document.getElementById("filter") as HTMLInputElement;

      if (todo.toLowerCase().includes(filter.value)) {
        this.addTodolist(i, todo);
      }
    }
  };
}
