import Form from './Form';
import '../styles/LeftBanner.css'
// Changer en page preLoad
export default function LeftBanner({list,updateList}){
    
    
    return (
        <nav>
            <Form list={list} updateList={updateList}/>
        </nav>
    )
}