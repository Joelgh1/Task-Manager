
interface Project{
    id: number,
    title: string,
    taskList: Task[]
}

interface Task{
    title: string,
    desc: string
}

export {Project}