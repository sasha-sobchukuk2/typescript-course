
function Logger (constructon:Function){
    console.log('loggin...')
    console.log(constructon)
}

@Logger
class Person1 {
    name='name'
    constructor() {
        console.log('creating person object..')
    }

}
const pers = new Person1()

console.log(pers)










