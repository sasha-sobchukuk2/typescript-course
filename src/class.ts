class Department {
    // private  name:string ="DEFAULT"
    // private employes:string[] =[]

    constructor(
        private readonly id: string | number,
        private name: string,
        private employes: string[] = []
    ) {
        // this.name = n
    }

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
}


const acaunting = new ITDepartment('1', ['admin1','admin2'])
acaunting.addEmploys('1 employ')
acaunting.addEmploys('2 employ')
acaunting.printEmploys()
console.log(acaunting)




