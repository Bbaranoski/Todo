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
domAppend(header.element, document.body)
const tittle = new domCreate('h1')
domAppend(tittle.element, header.element)
domText(tittle.element, 'Todo List')