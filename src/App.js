import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import { Header } from './header/header';
import { Home } from './pages/home';
/*import { Food } from './food/food';

import { Order } from './order/order';
*/
//import { Menu } from './menu/menu'
  






// fonctions index.js
function App() {
    // La balise vide <> permet de s'assurer que les parenthèses contiennent une seule racine dans l'arbre HTML
    return (
    <>
      <Header />
      <main className="w-75 mx-auto p-5">
        <Home />
        
      </main>
    </>
    );
}


export default App;
