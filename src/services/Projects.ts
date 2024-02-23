import {projectsMock} from "../mocks/projects-mock.ts";

async function getProjects(){
    return projectsMock
}

async function getProject(projectId: number){
    return projectsMock.filter(e => e.id === projectId)[0]
}

export {getProjects, getProject}