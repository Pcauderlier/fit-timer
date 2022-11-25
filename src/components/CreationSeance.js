import Form from './Form';
import '../styles/CreationSeance.css'
// Changer en page preLoad
export default function CreationSeance({list,updateList}){
    
    
    return (
        <div>
            <div className='boite-formulaire'>
                <Form list={list} updateList={updateList}/>
            </div>

        </div>
    )
}