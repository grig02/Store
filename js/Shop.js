import {DOM} from"./DOM.js"
export class Shop{
    listHTML = DOM.find("#list")
    cartHTML = DOM.find("#cart")
    totalHTML= DOM.find("#total")
    moveButton = DOM.find('#move')
    constructor(){
        this
        .getProducts()
        .then(result=> {
            console.log(result)
        })
    }
    getProducts(){
        return fetch("https://fakestoreapi.com/products").then(data=> data.json())
    }
    renderProducts(){}
    renderCart(){}
    products = []
    cart = []
    total = 0
   
}