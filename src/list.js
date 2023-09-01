import { domAppend, domText } from "./dom.js";
import { buttonTodo } from "./todo.js";

export const createList = function (text) {
  const list = document.createElement("div");
  list.classList.add("list");
  domAppend(list, menu);
  const tittle = document.createElement("h2");
  domText(tittle, text);
  domAppend(tittle, list);

  this.main = document.createElement("div");
  this.main.classList.add("main");

  list.addEventListener("click", () => {
    const delet = document.getElementById("select");
    if (this.main != delet) {
      delet.remove();
      domAppend(this.main, content);
      domAppend(buttonTodo, this.main);
      this.main.setAttribute("id", "select");
    }
  });

  const buttonListDelet = document.createElement("button");
  domText(buttonListDelet, "X");
  domAppend(buttonListDelet, list);

  buttonListDelet.addEventListener("click", (e) => {
    const delet = document.getElementById("select");
    if (delet == this.main) {
      delet.remove();
      e.stopPropagation();
      list.remove();
    } else if (delet !== this.main) {
      e.stopPropagation();
      list.remove();
    }
  });
};