"use strict";
class Department {
    constructor(id, name, employes = []) {
        this.id = id;
        this.name = name;
        this.employes = employes;
        console.log(this.fiscalYear);
    }
    static createWorker(name) {
        /** statick method colud work without of instans , just from Department.createWorker*/
        console.log(this.fiscalYear);
        return { name: name };
    }
    describe() {
        console.log(this.name);
    }
    addEmploys(emp) {
        this.employes.push(emp);
    }
    printEmploys() {
        console.log(`id:${this.id} employes:  ${this.employes}`);
    }
}
/**
 * static означає поза екземпляром
 * static означає шо доступ до властивості нема з цього класу, крім статичних методів

 */
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addITEmploy(name) {
        if (name === 'max') {
            console.log('dont exceptable');
        }
        this.employes.push(name);
    }
}
class ReportsDepartment extends Department {
    constructor(id, name, reports) {
        super(id, name, reports);
        this.lastReport = reports[-1];
        this.reports = reports;
    }
    get firstReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('No report found.');
        }
    }
    set firstReport(data) {
        this.addReport(data);
    }
    addReportsToFirst(report) {
        this.reports = [report, ...this.reports];
    }
    addReport(report) {
        this.reports.push(report);
    }
}
const worker1 = Department.createWorker('1');
console.log(worker1);
console.log(Department.fiscalYear);
// const worker1  = new Department('1')
// const reportsDep = new ReportsDepartment(1,'sasha',['report1'])
// reportsDep.firstReport = '123'
// console.log(reportsDep.firstReport )
// const acaunting = new ITDepartment('1', ['admin1','admin2'],)
// acaunting.addEmploys('1 employ')
// acaunting.addEmploys('2 employ')
// acaunting.printEmploys()
// console.log(acaunting)
//# sourceMappingURL=class.js.map