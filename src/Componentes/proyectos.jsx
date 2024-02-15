import React from "react";
import TarjetaProy from "./tarjeta-proy";
import '../Estilos-Componentes/proyectos.scss';

function Proyectos(){
  return(
    <div className="proy" id="proy">
      
      <div className="cont-proy">
        <div className="proy-titulo">
          <h1>Proyectos📚</h1>
        </div>
        <div className="proy-tarjetas">
            <a href="https://solodeveloperalpha.github.io/Simple-Calc/" target="_blank">
            <TarjetaProy fecha="OCT 23 - OCT 25 2023" titulo="Simple-Calc" descripcion="Calculadora que permite realizar operaciones basicas ademas de mostrar operaciones que ya se realizaron anteriormente." ruta="/walt-port-v2/build/images/appcalc.jpg" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>
            <a href="https://solodeveloperalpha.github.io/LocalWeather/" target="_blank">
              <TarjetaProy fecha="OCT 16 - OCT 25 2023" titulo="LocalWeather" descripcion="Obtén acceso instantáneo a la temperatura actual, pronósticos a corto y largo plazo, velocidad del viento, humedad y más, todo presentado en una interfaz fácil de usar." ruta="/walt-port-v2/build/images/appclima.jpg" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>
            <a href="https://solodeveloperalpha.github.io/pokeDexter/" target="_blank">
            <TarjetaProy fecha="OCT 20 - OCT 25 2023" titulo="PokeDexter" descripcion="Pokedex pokemon el cual permite ver a todos los pokemon de todas las generaciones hasta la fecha, ademas brinda una pequeña descripcion de cada uno , ala vez que muestra su tipo." ruta="/walt-port-v2/build/images/apppokedex.jpg" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>
            <a href="https://spotifychronohits.firebaseapp.com" target="_blank">
            <TarjetaProy fecha="NOV 01 - DEC 20 2023" titulo="Spotify-ChronoHits" descripcion="App no oficial de Spotify, inluye cosas adicionales como calificacion por estrellas y la adicion de CHRONOHITS el cual muestra las 3 mejores canciones de cada artista , todo usando tu cuenta de Spotify." ruta="/walt-port-v2/build/images/appChronoHits.jpg" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>

            <a href="https://solodeveloperalpha.github.io/Edie-Homepage-master/" target="_blank">
            <TarjetaProy fecha="MAR 18 2023" titulo="Edie-Homepage-master PORTFOLIO" descripcion="Un ejemplo de Portfolio realizado como Reto o Challenge por la pagina de DevChallenges.io" ruta="/walt-port-v2/build/images/appEdieExamplePortfolio.jpg" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>

            <a href="https://solodeveloperalpha.github.io/walterPortfolio/" target="_blank">
            <TarjetaProy fecha="OCT 20 - OCT 23 2023" titulo="Walter (PORTFOLIO) V1" descripcion="La primera version de la creacion de mi Portfolio web" ruta="/walt-port-v2/build/images/portfoliov1.png" tec1="html5" id1="html5" tec2="css3" id2="css3" tec3="javascript" id3="javascript"/>
            </a>
        </div>
        
      </div>
    </div>

  );

}

export default Proyectos;