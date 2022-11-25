import '../styles/App.css'
import Timer from './Timer';

import CreationSeance from './CreationSeance';
import { useState } from 'react';



function App() {
  let [list , updateList] = useState([])

  return (
    <div className='BG'>
    
      <CreationSeance list={list} updateList={updateList} />
        
      {/*<Timer/>*/}

    </div>
  );
}

export default App;
