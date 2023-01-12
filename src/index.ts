import { TodoInput } from "./TodoInput";
import { Todolist } from "./Todolist";
import { TodoUtil } from "./TodoUtil";

const todolist = new Todolist();

const todoInput = new TodoInput(todolist.todolist);
todoInput.inputList(todolist.displayTodolist);

TodoUtil.todoFilter(todolist.displayTodolist);
