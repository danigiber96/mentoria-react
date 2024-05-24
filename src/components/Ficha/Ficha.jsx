import "./Ficha.css"

export function Ficha({animal}){   

  const animalid = "animal" + animal.id;
  const imagenId = "imagen" + animal.id;
  
  return (
    <div className="ficha" id= {animalid}>
        <div id={imagenId} style={{backgroundImage: `url(${animal.imagen})`}} className="imagenMascota">
            <div className="nombreMascota">{animal.nombre}</div>
        </div>
        <ul className="virtudes">
           {animal.virtudes.map((virtud,index) =>{
            return(
              <li  key = {index}>
               {virtud}
              </li>
            )
           })}
        </ul>
        <button className="botonAdoptar" id="adoptar1">Adoptar</button>
    </div>
   
  );
}