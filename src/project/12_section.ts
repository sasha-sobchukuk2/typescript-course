import 'reflect-metadata'

import _ from 'lodash'
// @ts-ignore
import {plainToClass} from "class-transformer";
// @ts-ignore
import {validate, ValidationError} from "class-validator";
import {Product} from "./product.model";
declare var GLOBAL:any

const products = [
    {title:'a carpet',price:33},
    {title:'a carpet',price:33},
    {title:'a carpet',price:33}
]


console.log(GLOBAL)
console.log(_.shuffle([1,2,3]))
const p1 = new Product('bor',12)

console.log(p1.getInform())

// const loadedProducts = products.map(prod=>{
//     return new Product(prod.title,prod.price)
// })

const loadedProducts =  plainToClass(Product,products)

for(const prod of  loadedProducts){
    console.log(prod.getInform())
}

const newProd = new Product('',0)
validate(newProd).then((errors:ValidationError)=>{
    if(errors.length >0){
        console.error('validation')
    }else {
        console.log(newProd.getInform())
    }
})



