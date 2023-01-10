const todolist: string[] = [];

document.forms["todoForm"].onsubmit = (event: SubmitEvent): void => {
  event.preventDefault();

  const input = document.forms["todoForm"]["todo"] as HTMLInputElement;

  todolist.push(input.value);

  document.forms["todoForm"].reset();
  console.info(todolist);
};
