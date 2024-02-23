import {useEffect, useState} from "react";
import {Project} from "../types";
import {getProjects} from "../services/Projects.ts";

export function useProjects(){
    const [projects, setProjects] = useState([] as Project[])

    useEffect(() => {
        getProjects().then(result => setProjects(result))
    }, [])

    return {projects}
}