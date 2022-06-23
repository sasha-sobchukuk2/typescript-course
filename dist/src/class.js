"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        console.log("id:" + this.id + " employes:  " + this.employes);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var acaunting = new ITDepartment('1', ['admin1', 'admin2']);
acaunting.addEmploys('1 employ');
acaunting.addEmploys('2 employ');
acaunting.printEmploys();
console.log(acaunting);
//# sourceMappingURL=class.js.map