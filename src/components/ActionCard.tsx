import "./ActionCard.css"
interface Props{
    title: string,
    desc: string
}
export function ActionCard(props: Props) {
    return (
        <article className="action-card">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </article>
    )
}