import './App.css';
import { Route } from "wouter";
import Personaje from "./Personaje";
import Inicio from "./inicio"
function App() {
  return (

    <div className="App">

      <div className="centro">

        <div className="nav">
          <div className='botones'>
            <a href>Personajes</a>
            <a href>Info de la pagina</a>
          </div>
          <img src='./imagenes/Logo.png' alt='' />
          <input type="text" placeholder='Buscar Personaje' />
        </div>


        <div className="abajo">
          <Route path="/Personaje/:name" component={Personaje} />
          <Route path="/" component={Inicio} />

        </div>
      </div>
    </div>
  );
}

export default App;
