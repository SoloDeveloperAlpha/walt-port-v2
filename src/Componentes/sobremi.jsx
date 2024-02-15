import React from "react";
import '../Estilos-Componentes/sobre-mi.scss';

function SobreMi(){
  return (
    <div className="sobremi" id="sobremi">
      <div className="cont-sobremi">
        <h1>Sobre mi🙋</h1>
        <div className="texto-sobremi">
          <p>Después de la pandemia, decidí enfocarme más en el desarrollo web, comprendiendo la importancia de aspectos como la <span id="resalt">psicología del color</span>, el <span id="resalt">diseño UX</span> y las tipografías para mejorar la experiencia del usuario en los sitios web. Mi objetivo principal es construir proyectos digitales para clientes interesados en llevar su marca al <span id="resalt">mundo online</span>. En mi tiempo libre, me gusta editar videos y disfrutar de música indie mientras entreno en el gimnasio, buscando equilibrar el desarrollo mental y físico.</p>
        </div>
      </div>
    </div>

  );
}

export default SobreMi;