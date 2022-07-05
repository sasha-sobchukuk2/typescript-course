
function autobind(target:any,methodName:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor:PropertyDescriptor  = {
        configurable:target,
        get(): any {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor
}

class AppProject{
    templateElement:HTMLTemplateElement
    hostElement:HTMLElement
    element:HTMLFormElement
    titleInputElement:HTMLInputElement
    descriptionInputElement:HTMLInputElement
    peopleElement:HTMLInputElement
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLElement

        const importedNode = document.importNode(this.templateElement.content,true  )
         this.element = importedNode.firstElementChild as HTMLFormElement

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement
        this.peopleElement = this.element.querySelector('#people')! as HTMLInputElement

        this.configure()
        this.attach()
    }

    private gatherUserInput():[string,string,number]|void{
        const enteredTittle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleElement.value;
        if(
            enteredTittle.trim().length === 0
            || enteredDescription.trim().length ===0
            || enteredDescription.trim().length === 0
        ){
             alert('invalid input ')
            return;
        }else {
            return [enteredTittle,enteredDescription,+enteredPeople]
        }
    }

    private clearInputs (){
        this.titleInputElement.value=''
        this.descriptionInputElement.value=''
        this.peopleElement.value=''
    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)){
            const [title,description,people] = userInput
            console.log(title,description,people)
            this.clearInputs()

        }

    }
    private configure (){
        this.element.addEventListener('submit',this.submitHandler)
    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element)
    }

}


const prjInput = new AppProject()


