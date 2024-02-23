import {useLoaderData} from "react-router-dom";
import {getProject} from "../../services/Projects.ts";
import {Header} from "../commons/Header.tsx";
import {Footer} from "../commons/Footer.tsx";
import "./ProjectDetail.css"
import {Project} from "../../types";
import {Project as ProjectView} from "./Project.tsx";

// @ts-ignore
export async function loader({params}) {
    const data = await getProject(parseInt(params.projectId))
    return {data}
}

export function ProjectDetail() {

    const data = useLoaderData()
    // @ts-ignore
    const project = data.data as Project
    return (
        <main>
            <Header title={project.title}/>
            <section className="project-detail">
                <ProjectView project={project}/>
            </section>
            <Footer/>
        </main>
    )
}