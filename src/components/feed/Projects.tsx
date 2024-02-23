import {Project} from "../../types";
import {Link} from "react-router-dom";

interface Props {
    feed: Project[]
}

export function Projects(props: Props) {
    return (
        <>
            {
                props.feed.length > 0
                    ? (
                        <ul>
                            {
                                props.feed.map(project => {
                                    return (
                                        <li key={project.id}>
                                            <Link to={`/projects/${project.id}`} className="project-link">
                                                <h2>{project.title}</h2>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                    : (<h2>No hay proyectos creados</h2>)
            }
        </>
    )
}