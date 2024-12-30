export class DOM{
    static find(selector){
        return document.querySelector(selector)
    }
    static findAll(selector){
        return document.querySelectorAll(selector)
    }
    static create(element,target,attributes){
        let elm = document.createElement(element)
        for(let key in attributes){
            elm[key] = attributes[key]
        }
        target.append(elm)
        return elm
    }
}