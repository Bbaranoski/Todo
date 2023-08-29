export function domAppend(element, local){

    local.appendChild(element)

}

export function domText(element, text){

    element.textContent = text

}

export const createList = function(text){

    const list = document.createElement('div')
    list.classList.add('list')
    domAppend(list, menu)
    const tittle = document.createElement('h2')
    domText(tittle, text)
    domAppend(tittle, list)

    this.main = document.createElement('div')
    this.main.classList.add('main')
    
    list.addEventListener(('click'), () => {

        const delet = document.getElementById('select')
        if(this.main != delet){
            delet.remove()
            domAppend(this.main, content)
            this.main.setAttribute('id', 'select')
        }
        
    })

    const buttonListDelet = document.createElement('button')
    domText(buttonListDelet, 'X')
    domAppend(buttonListDelet, list)

    buttonListDelet.addEventListener(('click'), e => {

        const delet = document.getElementById('select')
        delet.remove()
        e.stopPropagation()
        list.remove()
        domAppend(testdiv, content)
        
    })

}

const header = document.createElement('div')
header.setAttribute('id', 'header')
domAppend(header, document.body)
const tittle = document.createElement('h1')
domText(tittle, 'Todo List')
domAppend(tittle, header)

const content = document.createElement('div')
content.setAttribute('id', 'content')
domAppend(content, document.body)
const menu = document.createElement('div')
menu.setAttribute('id', 'menu')
domAppend(menu, content)

const testdiv = document.createElement('div')
testdiv.setAttribute('id', 'select')
domAppend(testdiv, content)

const buttonListCreate = document.createElement('div')
buttonListCreate.setAttribute('id', 'listCreate')
buttonListCreate.classList.add('list')
domAppend(buttonListCreate, menu)
const buttonTittle = document.createElement('h2')
domText(buttonTittle, 'New List')
domAppend(buttonTittle, buttonListCreate)
const listForm = document.createElement('form')
domAppend(listForm, menu)
const listInput = document.createElement('input')
domAppend(listInput, listForm)
const listSubmmit = document.createElement('button')
domAppend(listSubmmit, listForm)
