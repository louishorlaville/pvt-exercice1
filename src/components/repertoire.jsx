import './repertoire.scss'

export default function Repertoire(props){
    const backColor = "#"+props.couleur
    console.log(backColor);

    return(
        <div className="conteneur-repertoire">
            <img src="./images/test.jpg" alt="#"/>
            <div className="conteneur-details-repertoire" style={{backgroundColor:backColor}}>
                <div className="titre-repertoire">{props.titre}</div>
                <div className="date-modif-repertoire">Modifié: {props.dateModif}</div>
            </div>
        </div>
    )
}