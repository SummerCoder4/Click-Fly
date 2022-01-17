import LecteurAudio from '../components/LecteurAudio'
import { Link } from "react-router-dom";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";
import monuments from "../assets/monument.png"
import photos from "../assets/photos.png";
import plane from "../assets/monde.png";
import recipe from "../assets/recipe.png";

const BoutonsTitrePays = ({setChat, audio}) => {
    return (  
        <div className="ButtonsAndTitle">
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
                  <LecteurAudio audio={audio} />
            </div>
                <div className="AllButtons">
                    <div className="button">    
                        <button className="buttonMonument" onClick={() => setChat("Allons voir quels momunents nous cache ce magnifique pays!")}>
                            <img src={monuments} alt="boutonMonument" />  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPicture" onClick={() => setChat("Découvrons les joyaux de ce monde !")}>
                            <img src={photos} alt="boutonPhoto" />
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonRecipe" onClick={() => setChat("Quels recettes allons nous découvrir ?!")}>
                            <img src={recipe} alt="boutonRecette" />  
                        <button className="recipe"><img src={recipe} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">  
                    <Link to = "/"> 
                        <button className="plane"><img src={plane} alt="boutonAvion" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPlane" onClick={() => setChat(" On repart à l'aventure !")}>
                            <img src={plane} alt="boutonAvion" />
                        </button>
                    </div>
                </div>
            </div>
    ) 
}
    
export default BoutonsTitrePays