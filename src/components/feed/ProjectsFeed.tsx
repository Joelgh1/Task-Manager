import {Header} from "../commons/Header.tsx";
import {Footer} from "../commons/Footer.tsx";
import "./ProjectsFeed.css"
import {useProjects} from "../../hooks/useProjects.ts";
import {Projects} from "./Projects.tsx";

export function ProjectsFeed() {

    const {projects} = useProjects()

    return (
        <main>
            <Header title={"Mis proyectos"}/>
            <section className="projects-content">
                <Projects feed={projects}/>
            </section>
            <Footer/>
        </main>
    )
}