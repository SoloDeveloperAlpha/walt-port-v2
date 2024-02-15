import React from "react";
import '../Estilos-Componentes/tarjeta_proy.scss';
function TarjetaProy(props){
  const tec1 = props.tec1;
  const tec2 = props.tec2;
  const tec3 = props.tec3;

  const id1 = props.id1;
  const id2 = props.id2;
  const id3 = props.id3;
  return (
    <div className="tarjeta-proy">
      <span id="fec-proy">{props.fecha}</span>
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <img src={props.ruta} alt={props.alt} />
      <div className="tecs-proy">
        <ul>
          <li><i className={`ri-${tec1}-fill`} id={id1}></i></li>
          <li><i className={`ri-${tec2}-fill`} id={id2}></i></li>
          <li><i className={`ri-${tec3}-fill`} id={id3}></i></li>
        </ul>
      </div>
    </div>
  );

}

export default TarjetaProy;