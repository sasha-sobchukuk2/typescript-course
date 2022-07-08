/*/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="states/project-state.ts" />
/// <reference path="utils/validation.ts" />
/// <reference path="decorators/autobind-decorator.ts" />
/// <reference path="components/base-components.ts" />
/// <reference path="components/project-item.ts" />*/
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />


namespace App {

    const prjInput = new ProjectInput()
    const activeProjectList = new ProjectList('active')
    const finishedProjectList = new ProjectList('finished')

}


