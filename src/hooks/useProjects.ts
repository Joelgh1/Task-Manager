import {useEffect, useState} from "react";
import {Project} from "../types";
import {projectsMock} from "../mocks/projects-mock.ts";

export function useProjects(){
    const [projects, setProjects] = useState([] as Project[])

    useEffect(() => {
        setProjects(projectsMock)
    }, [])

    return {projects}
}