import Form from './Form';
import '../styles/CreationSeance.css'
import ListeExercise from './ListeExercise';
// Changer en page preLoad
export default function CreationSeance({list,updateList}){
 
    return (
        <div className='page'>            
            <Form list={list} updateList={updateList}/>            
            <ListeExercise list={list} updateList={updateList} />
        </div>
    )
}