class Department {


    constructor(
        private readonly id: string | number,
        private name: string,
        protected employes: string[] = []

    ) {}

    describe(this: Department) {
        console.log(this.name)
    }

    addEmploys(emp: string) {

        this.employes.push(emp)
    }

    printEmploys() {
        console.log(`id:${this.id} employes:  ${this.employes}`)
    }
}

class ITDepartment extends Department{

     constructor(id:string ,public  admins:string[]) {
         super(id,'IT');
     }
     addITEmploy(name:string){
         if (name === 'max'){
             console.log('dont exceptable')
         }
         this.employes.push(name)
     }
}
class ReportsDepartment extends Department{
    private lastReport:string
    private reports: string[]

    get firstReport (){
        if(this.lastReport) {
            return this.lastReport;
        }else {
            throw new Error('No report found.')
        }
    }
    set firstReport (data:string){
        this.addReport(data)
    }
    constructor(id:number,name:string,reports:string[]) {
        super(id,name,reports);
        this.lastReport =  reports[-1]
        this.reports =  reports
    }
    addReportsToFirst (report:string){
        this.reports=[report,...this.reports]
    }
    addReport(report:string){
        this.reports.push(report)
    }
}

const reportsDep = new ReportsDepartment(1,'sasha',['report1'])
// reportsDep.firstReport = '123'
// console.log(reportsDep.firstReport )
// const acaunting = new ITDepartment('1', ['admin1','admin2'],)
// acaunting.addEmploys('1 employ')
// acaunting.addEmploys('2 employ')
// acaunting.printEmploys()
// console.log(acaunting)




