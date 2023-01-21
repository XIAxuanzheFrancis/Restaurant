import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import logo from './logo.png';
/*
import { Header } from './header/header';
import { Home } from './home/home';
import { Food } from './food/food';

import { Order } from './order/order';
*/
import { Menu } from './menu/menu'
  

const menus = [
  {
    name: 'Accueil',
    url: '/home',
  },
  {
    name: 'Carte',
    url: '/food',
  },
  {
    name: 'Menus',
    url: '/menu',
  },
  {
    name: 'Commande',
    url: '/order',
  },
];

const navItems = menus.map(menu => {
  return (
    <li className="nav-item mx-3" key={menu.url}>
      <a className="nav-link active" aria-current="page" href={menu.url}>{menu.name}</a>
    </li>
  );
});




// fonctions index.js
function App() {
    // La balise vide <> permet de s'assurer que les parenthèses contiennent une seule racine dans l'arbre HTML
    return (
    <>
<nav className="navbar navbar-light bg-light w-100 d-flex walign-items-center">
  <img src={logo} alt="logo" width="120" className="navbar-brand mx-5" href="#" />
  <ul className="navbar-nav flex-grow-1 d-flex flex-row justify-content-end mx-5 mb-2">
    {navItems}
  </ul>
</nav>

      <h1>Restauration Rapide </h1>
      <p>Le meilleur endroit où manger sur les Cézeaux!</p>
    </>

    );
}


export default App;
