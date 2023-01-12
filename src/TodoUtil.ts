export class TodoUtil {
  static todoFilter(displayTodolist: () => void): void {
    displayTodolist();

    document.getElementById("filter").onkeyup = (): void => {
      displayTodolist();
    };

    document.getElementById("filter").onkeydown = (): void => {
      displayTodolist();
    };
  }
}
