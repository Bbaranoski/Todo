import { createList } from "./list";

export function domAppend(element, local) {
  local.appendChild(element);
}

export function domText(element, text) {
  element.textContent = text;
}

const header = document.createElement("div");
header.setAttribute("id", "header");
domAppend(header, document.body);
const tittle = document.createElement("h1");
domText(tittle, "Todo List");
domAppend(tittle, header);

const content = document.createElement("div");
content.setAttribute("id", "content");
domAppend(content, document.body);
const menu = document.createElement("div");
menu.setAttribute("id", "menu");
domAppend(menu, content);

const buttonListCreate = document.createElement("div");
buttonListCreate.classList.add("listCreate");
buttonListCreate.classList.add("list");
domAppend(buttonListCreate, menu);
const buttonTittle = document.createElement("h2");
domText(buttonTittle, "New List");
domAppend(buttonTittle, buttonListCreate);

buttonListCreate.addEventListener("click", () => {
  domAppend(listForm, menu);
  buttonListCreate.remove();
});

const listForm = document.getElementById("form");
const listTittle = document.getElementById("tittle");
listForm.remove();
listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  new createList(listTittle.value);
  listTittle.value = "";
  listForm.remove();
  domAppend(buttonListCreate, menu);
});
