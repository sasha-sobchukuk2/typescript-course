
import {ProjectInput} from "./components/project-input";
import {ProjectList} from "./components/project-list";
// @ts-ignore
import {mapBody} from './map'
mapBody()
const prjInput = new ProjectInput()
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')

