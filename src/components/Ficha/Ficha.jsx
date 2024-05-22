import "./Ficha.css"

export function Ficha(){   
  return (
    <div className="ficha" id="animal1">
        <div id="imagen1" className="imagenMascota">
            <div className="nombreMascota">Gato</div>
        </div>
        <ul className="virtudes">
            <li>Ladrar</li>
            <li>Comer</li>
        </ul>
        <button className="botonAdoptar" id="adoptar1">Adoptar</button>
    </div>
   
  );
}