import { useEffect, useState } from 'react';
import '../styles/ListeExeBorderTop.css'

export default function ListeExeBorderTop({curseurExe,curseurInterne,list,updateCurseurExe,updateCurseurInterne,updateTriggerNext,triggerNext}){
    // Toute la partie avec Rep permet d'afficher : Serie : 1/2 ect ...
    let [ rep , updaterep] = useState(0)
    function changeRep(){
    
        if (list[curseurExe].exercise.comentsList[curseurInterne] === list[curseurExe].exercise.name){
            updaterep((e)=> e+1)
        }
        if (curseurInterne === 0 ){
            updaterep(1)
        }
    }
    useEffect(()=>{
        changeRep()},
        [curseurInterne]
    )
    return (
    <div className="top-border-liste-exe">
    {curseurExe > 0 ?
        <div className="exe-precedent exe-borderbox"
            onClick={()=>{
                updateCurseurExe((e)=>e-1);
                updateCurseurInterne(0);
                updateTriggerNext((e)=> !e) //Sert a declencher un UseEffect dans le composant Timer

            }}>
        <h3>Previous</h3>
        <p>{list[curseurExe-1].exercise.name}</p>
        </div>
    : 
    <div className="exe-precedent exe-borderbox"></div>
    }
        
        <div className="exe-actuel exe-borderbox"
            onClick={()=>{
                updateCurseurInterne(0);
                updateTriggerNext((e)=> !e) //Sert a declencher un UseEffect dans le composant Timer
                console.log('TriggerNext est appeler')
                }}>
        <h3>Now</h3>
        <p>{list[curseurExe].exercise.name}</p>
        <p>Series : {rep} / {list[curseurExe].exercise.repetitionNumber}</p>
        
        </div>
    {curseurExe < list.length-1 ?
        <div className="exe-suivant exe-borderbox"
            onClick={()=>{
                updateCurseurExe((e)=>e+1);
                updateCurseurInterne(0);
                updateTriggerNext((e)=> !e) //Sert a declencher un UseEffect dans le composant Timer
                }}>
        <h3>Next</h3>
        <p>{list[curseurExe+1].exercise.name}</p>
        </div>
    : 
    <div className="exe-suivant exe-borderbox"></div>    
    }
       
    </div>
    )
}