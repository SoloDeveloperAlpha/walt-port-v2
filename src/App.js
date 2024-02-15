import "./App.scss";
import Navegador from "./Componentes/nav";
import Header from "./Componentes/header";
import SobreMi from "./Componentes/sobremi";
import Habilidades from "./Componentes/habilidades";
import Proyectos from "./Componentes/proyectos";
import Footer from "./Componentes/footer";

function App() {
  return (
    <div className="App">
      <div className="Contenedor-Principal">
        <Navegador />
        <Header />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
