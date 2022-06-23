"use strict";
class Department {
    // private  name:string ="DEFAULT"
    // private employes:string[] =[]
    constructor(id, name, employes = []) {
        this.id = id;
        this.name = name;
        this.employes = employes;
        // this.name = n
    }
    describe() {
        console.log(this.name);
    }
    addEmploys(emp) {
        this.employes.push(emp);
    }
    printEmploys() {
        console.log(this.employes.length);
        console.log(`${this.id} ${this.employes}`);
    }
}
const acaunting = new Department(1, 'acaun1213123213213ting');
acaunting.addEmploys('bro');
acaunting.addEmploys('bro2');
// acaunting.employes.push('bro3')//cant
acaunting.printEmploys();
// const acaunting2 = {name:'2123', describe:acaunting.describe}
// acaunting2.describe()
// debugger
//# sourceMappingURL=class.js.map