function Logger(logString: string) {
    console.log('це буде перше11')

    return function (constructon: Function) {
        console.log('це буде друге11')

        console.log(logString)
        console.log(constructon)
    }

}

function WithTemplate(template: string, hookId: string) {

    return function<T extends {new(...args:any[]):{name:string}}> (originalonstructor: T) {
        return class extends originalonstructor {
            constructor(..._:any[]) {
                super();

                console.log('TEMPLATE FACTORY')
                // const p = new originalonstructor()
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}

// @Logger('bro123')
@WithTemplate('<h1>hello</h1>', 'decorators')
class Person1 {
    name = 'name123213213'

    constructor() {
        console.log('creating person object..')
    }

}

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
