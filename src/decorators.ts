
function Logger (logString:string){

    return function (constructon:Function){
        console.log('LOGGER FACTORY')

        console.log(logString )
        console.log(constructon)
    }

}

function WithTemplate (template:string,hookId:string){
    return function (constructor:any){
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










