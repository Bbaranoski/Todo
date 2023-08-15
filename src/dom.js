export const domCreate = function(element){

    this.element = document.createElement(element)

}

export function domAppend(element, local){

    local.appendChild(element)

}

export function domText(element, text){

    element.textContent = text

}

const header = new domCreate('div')
header.element.setAttribute('id', 'header')
domAppend(header.element, document.body)
const tittle = new domCreate('h1')
domAppend(tittle.element, header.element)
domText(tittle.element, 'Todo List')