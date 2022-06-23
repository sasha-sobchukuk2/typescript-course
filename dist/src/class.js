"use strict";
class Department {
    constructor(id, name, employes = []) {
        this.id = id;
        this.name = name;
        this.employes = employes;
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
const reportsDep = new ReportsDepartment(1, 'sasha', ['report1']);
// reportsDep.firstReport = '123'
// console.log(reportsDep.firstReport )
// const acaunting = new ITDepartment('1', ['admin1','admin2'],)
// acaunting.addEmploys('1 employ')
// acaunting.addEmploys('2 employ')
// acaunting.printEmploys()
// console.log(acaunting)
//# sourceMappingURL=class.js.map