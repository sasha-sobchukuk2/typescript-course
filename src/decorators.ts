
function Logger (logString:string){
    return function (constructon:Function){
        console.log(logString )
        console.log(constructon)
    }

}

@Logger('bro123')
class Person1 {
    name='name'
    constructor() {
        console.log('creating person object..')
    }

}
const pers = new Person1()

console.log(pers)










