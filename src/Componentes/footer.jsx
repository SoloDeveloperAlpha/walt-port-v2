import React from "react";
import '../Estilos-Componentes/footer.scss'

function Footer(){
  return (
    <div className="footer">
      <p>&copy; <span id="copyrightYear">{new Date().getFullYear()}</span> SoloDeveloperAlpha </p>
    </div>

  );
}

export default Footer;
