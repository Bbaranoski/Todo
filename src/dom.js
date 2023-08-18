export const domCreate = function(element){

    this.element = document.createElement(element)

}

export function domAppend(element, local){

    local.appendChild(element)

}

export function domText(element, text){

    element.textContent = text

}

export const createList = function(list, main, text){

    this.list = list
    list.element.classList.add('list')
    domAppend(list.element, menu.element)
    const tittle = new domCreate('h2')
    domText(tittle.element, text)
    domAppend(tittle.element, list.element)

    this.main = main
    main.element.classList.add('main')
    
    list.element.addEventListener(('click'), () => {

        const delet = document.getElementById('select')
        if(main.element != delet){
            delet.remove()
            domAppend(main.element, content.element)
            main.element.setAttribute('id', 'select')
        }
        
    })

    const buttonListDelet = new domCreate('button')
    domText(buttonListDelet.element, 'X')
    domAppend(buttonListDelet.element, list.element)

    buttonListDelet.element.addEventListener(('click'), () => {

        list.element.remove()
        main.element.remove()
        domAppend(testdiv.element, content.element)
        
    })

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

const testdiv = new domCreate('div')
testdiv.element.setAttribute('id', 'select')
domAppend(testdiv.element, content.element)