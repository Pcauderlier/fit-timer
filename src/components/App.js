import '../styles/App.css'
import Timer from './Timer';
import Titre from './Titre';
import CreationSeance from './CreationSeance';
import { useState } from 'react';



function App() {
  //List est une liste d'objet {exercise : {name,repet,...}}
  // Pour acceder aux caracteristique d'un objet :
  //list.map((e)==> e.exercice.caracteristique)
  // Louche mais je ne sais pas trop si je peux faire autrement
  let [list , updateList] = useState([]) 
  let [startSeance , updateStartSeance] = useState(false)
  let [titre , updateTitre] = useState(['',false])

  return (
    <div className='BG'>
      { !titre[1] ?
      <Titre updateTitre = {updateTitre} titre={titre}
      />
      :
        !startSeance ? 
        <CreationSeance list={list} updateList={updateList} 
      startSeance = {startSeance} updateStartSeance ={updateStartSeance} 
        titre={titre} updateTitre={updateTitre}
      />
      :
      <Timer/>
      }
      
    </div>
  );
}

export default App;
