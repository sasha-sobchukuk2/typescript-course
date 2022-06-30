
function Logger (logString:string){
    console.log('це буде перше11')

    return function (constructon:Function){
        console.log('це буде друге11')

        console.log(logString )
        console.log(constructon)
    }

}

function WithTemplate (template:string,hookId:string){
    console.log('це буде друге222')

    return function (constructor:any){
        console.log('це буде перше22')

        console.log('TEMPLATE FACTORY')
        const p = new constructor()
        const hookEl = document.getElementById(hookId)
        if(hookEl){
            hookEl.innerHTML  = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('bro123')
@WithTemplate('<h1>hello</h1>','decorators')
class Person1 {
    name='name123213213'
    constructor() {
        console.log('creating person object..')
    }

}
const pers = new Person1()

console.log(pers)






function LogProp(target: any,propertyName:string |Symbol ){
    console.log('property decorator!');
    console.log(target, propertyName);
}


class  Product {
    @LogProp
    title :string;
    private _price:number
    set price(val:number){
        if(val>0){
            this._price = val
        }else {
            throw new Error('Invalid price - should be positive!')
        }
    }
    constructor(t:string,p:number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax:number){
        return this._price * (1 + tax)
    }
}








