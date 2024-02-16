import React, {useState} from "react";
import '../Estilos-Componentes/nav.scss';

function Navegador(){

  const [menuActivo, setMenuActivo] = useState(false);
  const alClick = () => {
    setMenuActivo(!menuActivo);
  };
  return(
    <div className="nav">
      <div className="nav-container">
        <ul>
          <li><a href="#sobremi">SOBRE MI</a></li>
          <li><a href="#hab">HABILIDADES</a></li>
          <li><a href="#proy">PROYECTOS</a></li>
          <li><a href="https://drive.google.com/drive/folders/16m4DI0wse4F_YN-NQwPNv-fMr89JM3WS?usp=drive_link" target="_blank">CERTIFICADOS</a></li>
        </ul>
        <div className="menu-boton" id="menu-boton" onClick={alClick}>
        <i className="fas fa-bars"></i>
      </div>
      </div>
      <div className={`nav-despl ${menuActivo ? 'activo' : ''}`}>
      <ul>
          <li><a href="#sobremi">SOBRE MI</a></li>
          <li><a href="#hab">HABILIDADES</a></li>
          <li><a href="#proy">PROYECTOS</a></li>
          <li><a href="https://drive.google.com/drive/folders/16m4DI0wse4F_YN-NQwPNv-fMr89JM3WS?usp=drive_link" target="_blank">CERTIFICADOS</a></li>
        </ul>
      </div>
    </div>
  );
}



export default Navegador;