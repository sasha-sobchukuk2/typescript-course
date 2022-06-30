"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructon) {
        console.log(logString);
        console.log(constructon);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
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
const pers = new Person1();
console.log(pers);
//# sourceMappingURL=decorators.js.map