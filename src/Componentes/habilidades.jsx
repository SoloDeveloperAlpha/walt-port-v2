import React from "react";
import '../Estilos-Componentes/habilidades.scss'

function Habilidades(){
  return(
    <div className="hab" id="hab">
      <div className="cont-hab">
          <div className="hab-type">
            <h1>Habilidades💫</h1>
            <ul>
              <li>• Capacidad de tomar decisiones</li>
              <li>• Facilidad para Trabajar en equipo</li>
              <li>• Capacidad de comunicación</li>
              <li>• Adaptacion frente al cambio</li>
              <li>• Gestión del Tiempo</li>
              <li>• Aprendisaje continuo</li>
              <li>• Atencion al detalle</li>
            </ul>
          </div>
          <div className="hab-type-explain">
            <img src="/images/Brazuca - Planning.png" alt="skills" />
          </div>
      </div>
      <div className="skills">
        <h1>Tecnologias</h1>
            <ul>
              <li><i className="ri-html5-fill" id="html5"></i></li>
              <li><i className="ri-css3-fill" id="css3"></i></li>
              <li><i className="ri-javascript-fill" id="javascript"></i></li>
              <li><i className="ri-bootstrap-fill" id="bootstrap"></i></li>
              <li><i className="ri-git-merge-fill" id="git-merge"></i></li>
              <li><i className="ri-github-fill" id="github"></i></li>
              <li><i className="ri-reactjs-line" id="reactjs"></i></li>
            </ul>
          </div>
    </div>

  );

}export default Habilidades;