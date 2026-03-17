"use strict";


const images = [
    {'id': '1', 'url':'imagens/img01.jpeg'},
    {'id': '2', 'url':'imagens/img02.jpeg'},
    {'id': '3', 'url':'imagens/img03.jpeg'},
    {'id': '4', 'url':'imagens/img04.jpeg'},
    {'id': '5', 'url':'imagens/img05.jpeg'},
    {'id': '6', 'url':'imagens/img06.jpeg'},
]

const containerItems = document.querySelector('.container-items')


const loadImages = (images, container) =>{
    images.forEach( images => {
        container.innerHTML += `<div class='item'> <img src='${images.url}'> </div>`
    })
}

loadImages( images, containerItems )

let items = document.querySelectorAll('.item')

const previus = () =>{
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () =>{
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0])
    items = document.querySelectorAll('.item')
}
document.querySelector('#previus').addEventListener('click', previus)
document.querySelector('#next').addEventListener('click', next)