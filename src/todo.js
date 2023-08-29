import {domAppend, domText} from "./dom.js"

export const todo = function(tittle, description, dueDate, priority){

    this.tittle = tittle
    this.description = description
    this.dueDate = dueDate
    this.priority = priority

}

export function createTodo(List, place){

    const div = document.createElement('div')
    div.classList.add('todo')
    domAppend(div, place)

    const tittle = document.createElement('h3')
    domText(tittle, List.tittle)
    domAppend(tittle, div)

    const description = document.createElement('p')
    domText(description, List.description)
    description.classList.add('description')
    domAppend(description, div)

    const priority = document.createElement('p')
    domText(priority, List.priority)
    priority.classList.add('priority')
    domAppend(priority, div)

    const date = document.createElement('p')
    domText(date, List.dueDate)
    date.classList.add('date')
    domAppend(date, div)

}