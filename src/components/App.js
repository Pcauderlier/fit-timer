import '../styles/App.css'
import Timer from './Timer';

import LeftBanner from './LeftBanner';
import { useState } from 'react';



function App() {
  let [list , updateList] = useState([])
  return (
    <div>
      <LeftBanner list={list} updateList={updateList} />
        
      <Timer/>

    </div>
  );
}

export default App;
