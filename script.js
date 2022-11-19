const grid = document.querySelector(".grid")
const add = document.querySelector(".add")
const contain = document.querySelectorAll(".container")
let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(){
    let title = prompt("Title:")
    let author = prompt("Author:")
    let pages = prompt("Pages:")
    let read = prompt("Have you read it?(Y/N)") 

    if(read.toLowerCase() == "y"){
        myLibrary.push(new Book(title,author,pages,"finished"))
    }else{
        myLibrary.push(new Book(title,author,pages,"not read"))
    }
    createBook(myLibrary[myLibrary.length - 1])
}

function createBook(book){
    const contain = createDiv("div", "", "container", grid)
    createDiv("div", book.title, "title", contain)
    createDiv("div", book.author, "author", contain)
    createDiv("div", book.pages, "num", contain)
    createDiv("div", book.read, "state", contain)
    const btn = createDiv("button", "Remove", "del", contain)
    btn.addEventListener("click", () => remove(contain))
}

function createDiv(type, elemText, elemClass, elemParent){
    const elem = document.createElement(type)
    elem.textContent = elemText
    elem.classList.add(elemClass)
    elemParent.appendChild(elem)
    return elem
}

function remove(container){
    container.remove()
}

add.addEventListener("click", () => addBookToLibrary())