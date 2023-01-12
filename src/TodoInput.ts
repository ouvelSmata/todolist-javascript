export class TodoInput {
  private todoForm: HTMLInputElement =
    document.querySelector("[name=todoForm]");

  constructor(private todolist: string[]) {}

  inputList(displayTodolist: () => void): void {
    this.todoForm.onsubmit = (event: SubmitEvent): void => {
      event.preventDefault();

      const todo = document.getElementById("todo") as HTMLInputElement;

      this.todolist.push(todo.value);

      document.forms["todoForm"].reset();

      console.info(this.todolist);

      displayTodolist();
    };
  }
}
