
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
        this.descriptionInputElement = this.element.querySelector('#title')! as HTMLInputElement
        this.peopleElement = this.element.querySelector('#title')! as HTMLInputElement

        this.configure()
        this.attach()
    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();
        console.log(this.titleInputElement.value )
        // debugger
    }
    private configure (){
        this.element.addEventListener('submit',this.submitHandler)
    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element)
    }

}


const prjInput = new AppProject()


