"use strict";
var Department = /** @class */ (function () {
    // private  name:string ="DEFAULT"
    // private employes:string[] =[]
    function Department(id, name, employes) {
        if (employes === void 0) { employes = []; }
        this.id = id;
        this.name = name;
        this.employes = employes;
        // this.name = n
    }
    Department.prototype.describe = function () {
        console.log(this.name);
    };
    Department.prototype.addEmploys = function (emp) {
        this.employes.push(emp);
    };
    Department.prototype.printEmploys = function () {
        console.log(this.employes.length);
        console.log(this.id + " " + this.employes);
    };
    return Department;
}());
var acaunting = new Department(1, 'acaun1213123213213ting');
acaunting.addEmploys('bro');
acaunting.addEmploys('bro2');
// acaunting.employes.push('bro3')//cant
acaunting.printEmploys();
// const acaunting2 = {name:'2123', describe:acaunting.describe}
// acaunting2.describe()
// debugger
//# sourceMappingURL=class.js.map