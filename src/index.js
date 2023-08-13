import './style.css'

const domCreate = function(element){

    this.element = document.createElement(element)

}

function domAppend(element, local){

    local.appendChild(element)

}

function domText(element, text){

    element.textContent = text

}

const header = new domCreate('div')
header.element.setAttribute('id', 'header')
domAppend(header.element, document.body)
const tittle = new domCreate('h1')
domAppend(tittle.element, header.element)
domText(tittle.element, 'Todo List')

const content = new domCreate('div')
content.element.setAttribute('id', 'content')
domAppend(content.element, document.body)
const menu = new domCreate('div')
menu.element.setAttribute('id', 'menu')
domAppend(menu.element, content.element)
const main = new domCreate('div')
main.element.setAttribute('id', 'main')
domAppend(main.element, content.element)

const todo = function(tittle, description, dueDate, priority){

    this.tittle = tittle
    this.description = description
    this.dueDate = dueDate
    this.priority = priority

}

function createTodo(List){

    const div = new domCreate('div')
    domAppend(div.element, main.element)

    const tittle = new domCreate('h3')
    domText(tittle.element, List.tittle)
    domAppend(tittle.element, div.element)

    const description = new domCreate('p')
    domText(description.element, List.description)
    description.element.classList.add('description')
    domAppend(description.element, div.element)

    const priority = new domCreate('p')
    domText(priority.element, List.priority)
    domAppend(priority.element, div.element)

    const date = new domCreate('p')
    domText(date.element, List.dueDate)
    domAppend(date.element, div.element)

}

const test = new todo('test', 'text', '22/22', 'urgent')
const test2 = new todo('pois', 'poise', '1122', 'normal')
createTodo(test)
createTodo(test2)
