import tabRepertoires from '../data/repertoires.json';
import './liste-repertoires.scss'
import Repertoire from './repertoire'

export default function ListeRepertoires(props){
    return(
        <div className="conteneur-liste-repertoires">
            {tabRepertoires.map(item =>
                <Repertoire key={item.id} id={item.id} titre={item.titre} couleur={item.couleur} dateModif={item.dateModif}/>    
            )}
        </div>
    )  
}