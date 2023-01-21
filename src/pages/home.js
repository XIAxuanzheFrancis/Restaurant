import logo from './home.png';
import './home.css'
  


export const Home = () => {
    return(
    <>
    <div className="boite">
        
        <img className="photo" src={logo} alt="logo"/>
        

        
        <p className="text" text-align="right">Xuanzhe est un restaurant qui propose une cuisine asiatique authentique. Le menu comprend des plats traditionnels de différentes régions d'Asie, notamment de la Chine, du Japon, de la Thaïlande et de l'Indonésie. Les ingrédients frais et de qualité sont utilisés pour préparer des plats savoureux et
         sains. Le restaurant dispose également d'un décor 
         élégant et d'un service attentif pour 
         une expérience de repas agréable.</p>
        

   </div>
    </>);
  };
  