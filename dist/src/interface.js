"use strict";
/** імплемент =  обовязково включити поля інтерфейсу що імплементуємо,
 *  можимо імплементувати одночасно з багатьох*/
class Person {
    constructor(n) {
        this.age = 10;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
let user1;
user1 = new Person('sasha');
/*user1 = {
    name: 'sasha',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + this.name)
    }
}*/
user1.greet('hi');
//# sourceMappingURL=interface.js.map