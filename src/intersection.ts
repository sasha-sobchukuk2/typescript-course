type Admin = {
    name: string;
    privileges: string[]
}
type Employee = {
    name: string
    startDate: Date;
}
//& згруповує разом 2 різні типи тесаме шо в інтерфейсах створити і  ElevatedEmployee extends 1, 2{}
type elevatedEmployee = Admin & Employee

const e1: elevatedEmployee = {
    name: 'max',
    privileges: ['admin'],
    startDate: new Date()
}

/** а тут лише те шо є в першому і другому тобто число*/
type StrNum = string | number
type NumBool = number | boolean
type Both = StrNum & NumBool

// let a:Both = 2

function add(a: StrNum, b: StrNum) {
    /** type quard typeof*/
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    } else {
        return a + b
    }
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
    /** in quard   якшо в типі emp  є поле privileges*/
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges)
    }
}

printEmployeeInformation({name: 'bro', startDate: new Date()})


class Car {
    drive() {
        console.log('drive')
    }
}

class Truck {
    drive() {
        console.log('drive drive')
    }

    loadCargo(amount: number) {
        console.log('loading cargo ...', +amount)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive

    if ('loadCargo' in vehicle) {
        //in quard
        vehicle.loadCargo(12)
    }
    if (vehicle instanceof Truck) {
        //instanceof quard
        vehicle.loadCargo(12)
    }

}

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    /**
     descrimination union це коли добавляєм конкретний тип к кожен interface щоб потім можна було промавити
     і де є конкретні поля а де нема, бо якшо обєднати то може буьти а може і не бути, і типскріпт ніфіга не помічний

     */
    let speed
    switch (animal.type) {
        case "horse":
            speed = animal.runningSpeed;
            break
        case "bird":
            speed = animal.flyingSpeed
            break
        default:
            return 0
    }
    console.log('speed' + speed)
}

moveAnimal({type:'horse',runningSpeed:2})

// const userInputElement = <HTMLInputElement >document.querySelector ("#user-input")! //в дужках позначаємо що буде після дужок
const userInputElement = document.querySelector ("#user-input")! as HTMLInputElement //  в реакті попереднє працює по іншому тому тре писати as
                                                                                                // і доре речі тут не обовязковий !
                                                                                                // бо ми вже й так вписуєм що це не  null

// userInputElement.value = 'hi there'
(userInputElement as HTMLInputElement).value = 'hi there' // а можна й так


