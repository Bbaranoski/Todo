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