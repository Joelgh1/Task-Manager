import {Project} from "../types";

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
                                        <li key={project.title}>
                                            <h2>{project.title}</h2>
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