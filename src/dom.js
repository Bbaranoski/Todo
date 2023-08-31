export function domAppend(element, local) {
    local.appendChild(element);
  }
  
  export function domText(element, text) {
    element.textContent = text;
  }
  
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
        this.main.setAttribute("id", "select");
      }
    });
  
    const buttonListDelet = document.createElement("button");
    domText(buttonListDelet, "X");
    domAppend(buttonListDelet, list);
  
    buttonListDelet.addEventListener("click", (e) => {
      const delet = document.getElementById("select");
      if(delet == this.main){
        delet.remove();
        e.stopPropagation();
        list.remove();
        domAppend(testdiv, content);
      }else if(delet !== this.main){
        e.stopPropagation();
        list.remove();
      };
    });

    const buttonTodo = document.createElement("button");
    buttonTodo.setAttribute("id", "newTodo")
    domText(buttonTodo, "New Todo")
    domAppend(buttonTodo, this.main)

    buttonTodo.addEventListener("click", () => {

    });

  };
  
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
  
  const testdiv = document.createElement("div");
  testdiv.setAttribute("id", "select");
  domAppend(testdiv, content);
  
  const buttonListCreate = document.createElement("div");
  buttonListCreate.setAttribute("id", "listCreate");
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