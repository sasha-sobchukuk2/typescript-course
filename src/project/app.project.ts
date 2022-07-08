import 'reflect-metadata'

// import {plainToClass} from 'class-transformer'
import {ProjectInput} from "./components/project-input";
import {ProjectList} from "./components/project-list";
import {Product} from "./product.model";

import _ from 'lodash'
// @ts-ignore
import {plainToClass} from "class-transformer";
declare var GLOBAL:any

const products = [
    {title:'a carpet',price:33},
    {title:'a carpet',price:33},
    {title:'a carpet',price:33}
]

const prjInput = new ProjectInput()
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')


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
