import React from "react";
import '../Estilos-Componentes/nav.scss';

function Navegador(){
  return(
    <div className="nav">
      <ul>
        <li><a href="#sobremi">SOBRE MI</a></li>
        <li><a href="#hab">HABILIDADES</a></li>
        <li><a href="#proy">PROYECTOS</a></li>
        <li><a href="https://drive.google.com/drive/folders/16m4DI0wse4F_YN-NQwPNv-fMr89JM3WS?usp=drive_link" target="_blank">CERTIFICADOS</a></li>
      </ul>
      <div className="menu-boton">
      <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navegador;