import { useState } from 'react';
import Timer from './Timer';
import '../styles/Seance.css'
import ListeExeBorderTop from './ListeExeBorderTop';



export default function Seance({list,titre}){
    const [curseurExe, updateCurseurExe] = useState(0); //Parcours les exe dans la liste global
    const [curseurInterne, updateCurseurInterne] = useState(0)// Parcours les timer dans la liste timer de chaque exe
    const [triggerNext , updateTriggerNext] = useState(false) //Sert a declencher une fonction dans un autre composant
    
    
    return (
        <div className='page-seance'>
        
            <h1 className='titre-seance'>{titre[0]}</h1>

            <h1 className='titre-exercise'>{list[curseurExe].exercise.comentsList[curseurInterne]}</h1>
            <Timer 
                list={list}
                curseurExe={curseurExe}
                updateCurseurExe={updateCurseurExe}
                curseurInterne ={curseurInterne}
                updateCurseurInterne = {updateCurseurInterne}
                triggerNext = {triggerNext}


            />
            <ListeExeBorderTop 
                list = {list}
                curseurExe = {curseurExe}
                updateCurseurExe = {updateCurseurExe}
                curseurInterne = {curseurInterne}
                updateCurseurInterne = {updateCurseurInterne}
                triggerNext = {triggerNext}
                updateTriggerNext = {updateTriggerNext}
            />
        </div>
    )
}