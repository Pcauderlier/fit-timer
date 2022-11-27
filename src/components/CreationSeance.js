import Form from './Form';
import '../styles/CreationSeance.css'
import ListeExercise from './ListeExercise';
// Changer en page preLoad
export default function CreationSeance({list,updateList, startSeance, updateStartSeance}){
    
    return (
        <div className='page'>       
            <Form list={list} updateList={updateList}/>            
            <ListeExercise list={list} updateList={updateList} />
            {list.length  > 0 &&
                <button className='start' onClick={()=> updateStartSeance(true)}>Start Session</button>
            }
            
        </div>
    )
}