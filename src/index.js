import './style.css'
import {todo, createTodo} from './todo.js'
import {domCreate, domAppend, domText} from './dom.js'

const content = new domCreate('div')
content.element.setAttribute('id', 'content')
domAppend(content.element, document.body)
const menu = new domCreate('div')
menu.element.setAttribute('id', 'menu')
domAppend(menu.element, content.element)
const main = new domCreate('div')
main.element.setAttribute('id', 'main')
domAppend(main.element, content.element)

const test = new todo('test', 'text', '22/22', 'urgent')
const test2 = new todo('pois', 'poise', '1122', 'normal')
createTodo(test, main.element)
createTodo(test2, main.element)