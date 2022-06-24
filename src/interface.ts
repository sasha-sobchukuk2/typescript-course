interface Greetable {
    name: string

    greet(phrase: string): void
}
/** імплемент =  обовязково включити поля інтерфейсу що імплементуємо,
 *  можимо імплементувати одночасно з багатьох*/
class Person implements Greetable {
    name: string
    age = 10
    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + this.name)
    }
}

let user1: Person
user1 = new Person('sasha')
/*user1 = {
    name: 'sasha',
    age: 26,
    greet(phrase: string) {
        console.log(phrase + this.name)
    }
}*/
user1.greet('hi')







