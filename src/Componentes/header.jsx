import React from "react";
import '../Estilos-Componentes/header.scss';

function Header(){
  return(
    <div className="header">
      <div className="cont-header">
        <div className="cont-img-sociales">
          <img src="images/pro_foto_corto.jpg" alt="Walter Astudillo Z" />
          <div className="sociales">
            <ul>
              <li><a href="https://www.instagram.com/walter.astudillo.z" target="_blank" rel="noopener">
                        <i className="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/waltcodex" target="_blank" rel="noopener">
                        <i className="ri-twitter-x-fill"></i></a></li>
              <li><a href="https://github.com/SoloDeveloperAlpha" target="_blank" rel="noopener">
                        <i className="fab fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/walter-astudillo-zevallos-961951264/" target="_blank" rel="noopener"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="name-profesion">
          <h2>👋Hola soy , </h2>
          <h1><span id="resalt">Walter</span> Astudillo Zevallos</h1>
          <span id="prof">Desarrollador Front End</span>
          <p>Realizo la maquetacion, diseño y ejecucion de sitios web para una mejor <span id="resalt">experiencia de usuario</span></p>
        </div>
      </div>

    </div>

  );
}

export default Header;