import {domCreate, domAppend, domText} from "./dom.js"

export const todo = function(tittle, description, dueDate, priority){

    this.tittle = tittle
    this.description = description
    this.dueDate = dueDate
    this.priority = priority

}

export function createTodo(List, place){

    const div = new domCreate('div')
    domAppend(div.element, place)

    const tittle = new domCreate('h3')
    domText(tittle.element, List.tittle)
    domAppend(tittle.element, div.element)

    const description = new domCreate('p')
    domText(description.element, List.description)
    description.element.classList.add('description')
    domAppend(description.element, div.element)

    const priority = new domCreate('p')
    domText(priority.element, List.priority)
    priority.element.classList.add('priority')
    domAppend(priority.element, div.element)

    const date = new domCreate('p')
    domText(date.element, List.dueDate)
    date.element.classList.add('date')
    domAppend(date.element, div.element)

}