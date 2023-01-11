const todolist: string[] = [];

function clearTodolist() {
  const todoBody = document.getElementById("todoBody");

  while (todoBody.firstChild) {
    todoBody.removeChild(todoBody.firstChild);
  }
}

function addTodolist(todo: string) {
  const trTodo = document.createElement("tr");

  const tdButton = document.createElement("td");
  trTodo.appendChild(tdButton);

  const button = document.createElement("input");
  button.type = "button";
  button.value = "Done";
  tdButton.appendChild(button);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  trTodo.appendChild(tdTodo);

  const todoBody = document.getElementById("todoBody");
  todoBody.appendChild(trTodo);
}

function displayTodolist() {
  clearTodolist();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];

    const filter = document.getElementById("filter") as HTMLInputElement;
    const result = filter.value;

    if (todo.toLowerCase().includes(result)) {
      addTodolist(todo);
    }
  }
}

document.forms["todoForm"].onsubmit = (event: SubmitEvent): void => {
  event.preventDefault();

  const input = document.forms["todoForm"]["todo"] as HTMLInputElement;

  todolist.push(input.value);

  document.forms["todoForm"].reset();
  console.info(todolist);

  displayTodolist();
};

document.getElementById("filter").onkeyup = (): void => {
  displayTodolist();
};

document.getElementById("filter").onkeydown = (): void => {
  displayTodolist();
};

displayTodolist();
