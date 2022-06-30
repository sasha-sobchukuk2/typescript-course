"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log('це буде перше11');
    return function (constructon) {
        console.log('це буде друге11');
        console.log(logString);
        console.log(constructon);
    };
}
function WithTemplate(template, hookId) {
    return function (originalonstructor) {
        return class extends originalonstructor {
            constructor(..._) {
                super();
                console.log('TEMPLATE FACTORY');
                // const p = new originalonstructor()
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
// @Logger('bro123')
let Person1 = class Person1 {
    constructor() {
        this.name = 'name123213213';
        console.log('creating person object..');
    }
};
Person1 = __decorate([
    WithTemplate('<h1>hello</h1>', 'decorators')
], Person1);
// const pers = new Person1()
//
// console.log(pers)
/*

function LogProp(target: any, propertyName: string | Symbol) {

    console.log('property decorator!');
    console.log(target, propertyName);
}

function LogProp2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accessor decorator')

    console.log(target)//розпише клас або просто конструктор не помню
    console.log(name)//розпише імя акцесора
    console.log(descriptor)// розпише дескриптор // get set
}

function LogProp3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator')

    console.log(target)//розпише клас або просто конструктор не помню
    console.log(name)//розпише імя імя методу
    console.log(descriptor)// розпише дескриптор // value writable
}
function LogProp4(target: any, name: string | Symbol, position:number) {
        console.log('Parameter decorator')

        console.log(target)//розпише клас або просто конструктор не помню
        console.log(name)//розпише імя методу
        console.log(position)// позиція // index

}

class Product {
    @LogProp()
    title: string;
    private _price: number
    @LogProp2
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @LogProp3
    getPriceWithTax(@LogProp4 tax: number) {
        return this._price * (1 + tax)
    }
}





//тут декоратори спрацююють раз бо вони тут виконуються лише при зверненні до класу

const p1 = new  Product('book 1',19)
const p2 = new  Product('book 2',29)

*/
//# sourceMappingURL=decorators.js.map