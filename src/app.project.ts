enum ProjectStatus {
    Active,
    finished
}
class Project{
    constructor(
       public id:string,
       public title:string,
       public description:string,
       public people:number,
       public status:ProjectStatus
    ) {}

}
type Listener = (items:Project[])=>void

class ProjectState {
    private listeners:Listener[] =[]
    private projects: Project[] = []
    private static instance: ProjectState;

    private constructor() {
    }

    static getInstance() {
        if (this.instance) {
            return this.instance
        }else {
            this.instance = new ProjectState()
            return this.instance
        }
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject =new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.Active
            );
        this.projects.push(newProject);
        for (const lisneterFn of this.listeners){
            lisneterFn(this.projects.slice());
        }
    }
    addListener(listenerfn:Listener ){
        this.listeners.push(listenerfn)
    }


}


function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: target,
        get(): any {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor
}
const projectState = ProjectState.getInstance();

interface Validatible {
    value: string | number
    required?: boolean
    minLength?: number
    maxLength?: number
    min?: number
    max?: number
}

function validatee(validatableInput: Validatible) {
    let isValid = true
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max
    }

    return isValid
}

class ProjectList {
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLElement;
    assignedProjects:Project[];

    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement
        this.assignedProjects = [];
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLElement
        this.element.id = `${this.type}-projects`
        projectState.addListener((projects:Project[] )=>{
            const relevantProjects = projects.filter(prj=>{
                if(this.type === 'active'){
                    return prj.status === ProjectStatus.Active
                }
                    return prj.status === ProjectStatus.finished
            })
            this.assignedProjects = relevantProjects;
             this.renderProjects();
        });
        this.atach()
        this.renderContent();
    }
    private renderProjects(){
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = ''
        for(const prjItem of this.assignedProjects){
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title
            listEl.appendChild(listItem )
        }
    }

    private renderContent() {
        const listId = `${this.type}-projects-list`
        this.element.querySelector('ul')!.id = listId
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS'
    }

    private atach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element)
    }

}


class AppProject {
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement
    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleElement: HTMLInputElement

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement


        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement
        this.peopleElement = this.element.querySelector('#people')! as HTMLInputElement

        this.configure()
        this.attach()
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTittle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleElement.value;
        const tittleValidatable: Validatible = {
            value: enteredTittle,
            required: true,
        }
        const descriptionValidatable: Validatible = {
            value: enteredDescription,
            required: true,
            minLength: 0
        }
        const peopleValidatable: Validatible = {
            value: +enteredPeople,
            required: true,
            min: 0,
            max: 9999
        }

        if (
            // enteredTittle.trim().length === 0
            // || enteredDescription.trim().length ===0
            // || enteredDescription.trim().length === 0
            !validatee(tittleValidatable) ||
            !validatee(descriptionValidatable) ||
            !validatee(peopleValidatable)
        ) {
            alert('invalid input ')
            return;
        } else {
            return [enteredTittle, enteredDescription, +enteredPeople]
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '1'
        this.descriptionInputElement.value = '2'
        this.peopleElement.value = '3'
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput
            console.log(title, description, people)
            projectState.addProject(title, description, people)
            this.clearInputs()

        }

    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }

}


const prjInput = new AppProject()
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')


