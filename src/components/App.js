import '../styles/App.css'
import Timer from './Timer';

import CreationSeance from './CreationSeance';
import { useState } from 'react';



function App() {
  //List est une liste d'objet {exercise : {name,repet,...}}
  // Pour acceder aux caracteristique d'un objet :
  //list.map((e)==> e.exercice.caracteristique)
  // Louche mais je ne sais pas trop si je peux faire autrement
  let [list , updateList] = useState([]) 
  let [startSeance , updateStartSeance] = useState(false)

  return (
    <div className='BG'>
      {!startSeance ? 
        <CreationSeance list={list} updateList={updateList} 
      startSeance = {startSeance} updateStartSeance ={updateStartSeance} />
      :
      <Timer/>
      }
      
    </div>
  );
}

export default App;
