import {Project} from "../../types";

interface Props {
    project: Project
}

export function Project(props: Props) {
    return (
        <>
            {
                props.project.taskList.length <= 0
                    ? (<h2>No hay tareas en el proyecto</h2>)
                    : (
                        <ul>
                            {
                                props.project.taskList.map((task, i) => {
                                    return (
                                        <li key={i}>
                                            <h3>{task.title}</h3>
                                            <h4>{task.desc}</h4>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
            }
        </>
    )
}