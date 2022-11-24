
import { useEffect, useState } from 'react'
import '../styles/Form.css'

function Form(){
    class Exe{
        constructor(){
            this.name = '';
            this.repetition = 0;
            this.pause = [0,0]; // ajouter une methode pour detecter et transformer sa;
            this.pauseRep = [0,0];
            this.duration = [0,0];
            this.needTimer = false;
        }

    }
    
    
    let [liste , updateList] = useState([])
    let [exercise , updateExercise] = useState({
         name : '',
         repetition : 0,
    })
    function handleSubmit(e){
        e.preventDefault()
        updateList([...liste,{exercise}])
    }
    function handleName(value){
        updateExercise({...exercise, name : value})
    }
    function handleRepetition(value){
        updateExercise({...exercise, repetition : value})
    }
    
    

    return (
        <div className='form-box'>
            <form onSubmit={(e)=>handleSubmit(e)}>
               <div className='input-box' > <label>Exercise Name</label>
                    <input type='text' name = 'name' placeholder='Pompes' 
                    onChange={(e)=>handleName(e.target.value)} />
               </div>
               <div className='input-box'> <label>Number of repetition </label>
                    <input type='number' min='0' step='1' name='repetiton' defaultValue={0}
                    onChange={(e)=> handleRepetition(e.target.value)} />
               </div>
               <div className='input-box'> <label>Pause between exercises</label>
                    <div>
                        <input type='number' min='0' step='0' name='pauseMin' className='time' placeholder='minutes'/>:
                        <input type='number' min='0' step='0' name='pauseSec' className='time' placeholder='secondes'/>
                    </div>
               </div>
               <div className='input-box'> <label>Pause between repetitions</label>
                    <div>
                        <input type='number' min='0' step='0' name='repetitonMin' className='time' placeholder='minutes'/>:
                        <input type='number' min='0' step='0' name='repetitionSec' className='time' placeholder='secondes'/>
                    </div>
               </div>
               <div className='input-box'> <label>Do you need a timer during the exercise ? </label>
                    <button className='check-box'>Affiche YES en vert ou NO en rouge</button>
               </div>
               {//needTimer && // needTimer pas encore OP
               <div className='input-box'><label>Exercise duration : </label>
                    <div>
                        <input type='number' min='0' step='0' name='durationMin'className='time' placeholder='minutes'/>:
                        <input type='number' min='0' step='0' name='durationSec'className='time' placeholder='secondes'/>
                    </div>
               </div>
               }       
               <div className='input-box'>
                    <input type='submit'/>
               </div>        
            </form>
            
        </div>
    )
}
export default Form