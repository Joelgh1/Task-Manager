import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import "./HomePage.css"
import {Link} from "react-router-dom";
import {ActionCard} from "./ActionCard.tsx";

export function HomePage(){
    return(
        <main>
            <Header title={"Inicio"}/>
            <section className="home-content">
                <header>
                    <h2>Gestor de tareas</h2>
                    <p>Gestiona tus tareas y proyectos de forma rápida y sencilla</p>
                </header>
                <div className="home-actions">
                    <Link to={"/projects"} className="action-link">
                        <ActionCard title={"Mis proyectos"} desc={"Consulta todos tus productos"}/>
                    </Link>

                    <Link to={"/new"} className="action-link">
                        <ActionCard title={"Nuevo proyecto"} desc={"Crea un proyecto y empieza a añadir tareas"}/>
                    </Link>
                </div>
            </section>
            <Footer/>
        </main>
    )
}