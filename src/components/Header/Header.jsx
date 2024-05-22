import { Patita } from "../Patita/Patita"
//import misEstilos from "./Header.module.css" 
import "./Header.css"

export function Header(){
    return(
        <div id="encabezado">
        <div>
            <h1>Galería de animales en adopción</h1>
            <h2>Animales adoptados hoy: 
                <span id="contadorAnimales">0</span>
            </h2>
        </div>
        
        <div className="logosContainer">
            <Patita/>
            <Patita/>
            <Patita/>
            <Patita/>
        </div>
        </div>

    )
}
export function Menu(){
    return(
        <div id="menu">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    )
}