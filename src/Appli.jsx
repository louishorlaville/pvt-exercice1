import './Appli.scss';
import Header from './components/header'
import ListeRepertoires from './components/liste-repertoires'

export default function Appli() {
  return (
    <div className="Appli">
        <Header/>
        <div id="contenuPage">
          <ListeRepertoires/>
        </div>
    </div>
  );
}
