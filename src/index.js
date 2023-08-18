import './style.css'
import {todo, createTodo} from './todo.js'
import {domCreate, createList} from './dom.js'

const test = new todo('test', 'text', '22/22', 'urgent')
const test2 = new todo('pois', 'poise', '1122', 'normal')

const aaaa = new createList(new domCreate('div'), new domCreate('div'), 'today')
const aaaaa = new createList(new domCreate('div'), new domCreate('div'), 'tomorrow')

createTodo(test, aaaa.main.element)
createTodo(test2, aaaaa.main.element)