"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    console.log('це буде друге222');
    return function (constructor) {
        console.log('це буде перше22');
        console.log('TEMPLATE FACTORY');
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'name123213213';
        console.log('creating person object..');
    }
};
Person1 = __decorate([
    Logger('bro123'),
    WithTemplate('<h1>hello</h1>', 'decorators')
], Person1);
const pers = new Person1();
console.log(pers);
function LogProp(target, propertyName) {
    console.log('property decorator!');
    console.log(target, propertyName);
}
function LogProp2(target, name, descriptor) {
    console.log('accessor decorator');
    console.log(target); //розпише клас або просто конструктор не помню
    console.log(name); //розпише імя акцесора
    console.log(descriptor); // розпише дескриптор // get set
}
function LogProp3(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target); //розпише клас або просто конструктор не помню
    console.log(name); //розпише імя імя методу
    console.log(descriptor); // розпише дескриптор // value writable
}
function LogProp4(target, name, position) {
    console.log('Parameter decorator');
    console.log(target); //розпише клас або просто конструктор не помню
    console.log(name); //розпише імя методу
    console.log(position); // позиція // index
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LogProp
], Product.prototype, "title", void 0);
__decorate([
    LogProp2
], Product.prototype, "price", null);
__decorate([
    LogProp3,
    __param(0, LogProp4)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=decorators.js.map