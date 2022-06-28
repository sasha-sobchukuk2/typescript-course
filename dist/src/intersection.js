"use strict";
const e1 = {
    name: 'max',
    privileges: ['admin'],
    startDate: new Date()
};
// let a:Both = 2
function add(a, b) {
    /** type quard typeof*/
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function printEmployeeInformation(emp) {
    /** in quard   якшо в типі emp  є поле privileges*/
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
}
printEmployeeInformation({ name: 'bro', startDate: new Date() });
class Car {
    drive() {
        console.log('drive');
    }
}
class Truck {
    drive() {
        console.log('drive drive');
    }
    loadCargo(amount) {
        console.log('loading cargo ...', +amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive;
    if ('loadCargo' in vehicle) {
        //in quard
        vehicle.loadCargo(12);
    }
    if (vehicle instanceof Truck) {
        //instanceof quard
        vehicle.loadCargo(12);
    }
}
//# sourceMappingURL=intersection.js.map