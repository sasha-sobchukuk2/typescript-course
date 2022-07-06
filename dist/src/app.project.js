"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["finished"] = 1] = "finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ProjectState();
            return this.instance;
        }
    }
    addProject(title, description, numOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        for (const lisneterFn of this.listeners) {
            lisneterFn(this.projects.slice());
        }
    }
    addListener(listenerfn) {
        this.listeners.push(listenerfn);
    }
}
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: target,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
const projectState = ProjectState.getInstance();
function validatee(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === "string") {
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        this.assignedProjects = [];
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
        this.atach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS';
    }
    atach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
class AppProject {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTittle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleElement.value;
        const tittleValidatable = {
            value: enteredTittle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 0
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 0,
            max: 9999
        };
        if (
        // enteredTittle.trim().length === 0
        // || enteredDescription.trim().length ===0
        // || enteredDescription.trim().length === 0
        !validatee(tittleValidatable) ||
            !validatee(descriptionValidatable) ||
            !validatee(peopleValidatable)) {
            alert('invalid input ');
            return;
        }
        else {
            return [enteredTittle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '1';
        this.descriptionInputElement.value = '2';
        this.peopleElement.value = '3';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autobind
], AppProject.prototype, "submitHandler", null);
const prjInput = new AppProject();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
//# sourceMappingURL=app.project.js.map