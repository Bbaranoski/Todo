import './style.css'
import {todo, createTodo} from './todo.js'
import {createList} from './dom.js'

const test = new todo('test', 'text', '22/22', 'urgent')
const test2 = new todo('pois', 'poise', '1122', 'normal')

const aaaa = new createList('today')
const aaaaa = new createList('tomorrow')

createTodo(test, aaaa.main)
createTodo(test2, aaaaa.main)