import { domAppend, domText } from "./dom.js";

export const todo = function (tittle, description, dueDate, priority) {
  this.tittle = tittle;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
};

export function createTodo(List, place) {
  const div = document.createElement("div");
  div.classList.add("todo");
  domAppend(div, place);

  const tittle = document.createElement("h3");
  domText(tittle, List.tittle);
  domAppend(tittle, div);

  const description = document.createElement("p");
  domText(description, List.description);
  description.classList.add("description");
  domAppend(description, div);

  const priority = document.createElement("p");
  domText(priority, List.priority);
  priority.classList.add("priority");
  domAppend(priority, div);

  const date = document.createElement("p");
  domText(date, List.dueDate);
  date.classList.add("date");
  domAppend(date, div);
}

export const buttonTodo = document.createElement("button");
buttonTodo.setAttribute("id", "newTodo");
domText(buttonTodo, "New Todo");

buttonTodo.addEventListener("click", () => {
  buttonTodo.remove();
  const todoDiv = document.getElementById("select");
  domAppend(todoForm, todoDiv);
});

const todoForm = document.getElementById("formTodo");
const todoTittle = document.getElementById("tittleTodo");
const todoDescription = document.getElementById("descriptionTodo");
const todoPriority = document.getElementById("urgentTodo");
const todoDate = document.getElementById("dateTodo");
todoForm.remove();

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoDiv = document.getElementById("select");
  todoForm.remove();
  domAppend(buttonTodo, todoDiv);

  const info = new todo(
    todoTittle.value,
    todoDescription.value,
    todoDate.value,
    todoPriority.value,
  );
  createTodo(info, todoDiv);
  todoTittle.value = "";
  todoDescription.value = "";
  todoDate.value = "";
  todoPriority.value = "";
});
