import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.png';



// fonctions index.js

function App() {
    // La balise vide <> permet de s'assurer que les parenthèses contiennent une seule racine dans l'arbre HTML
    return (
    <>
      <img alt="logo" src={logo} />
      <h1>Restauration Rapide </h1>
      <p>Le meilleur endroit où manger sur les Cézeaux!</p>
    </>

    );
}


export default App;
