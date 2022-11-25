
import { useEffect, useState } from 'react'
import '../styles/Form.css'

function Form({list,updateList}){

    let [exercise , updateExercise] = useState({
         name : '',
         repetitionNumber : 1,
         pauseBetweenRepetition : [0,0],
         pauseBetweenExe : [0,0],
         needTimer : false,
         duration : [0,0],
        
    })
    function handleSubmit(e){
        e.preventDefault()
        updateList([...list,{exercise}])
    }
    function handleName(value){
        updateExercise({...exercise, name : value})
    }
    function handleRepetition(value){
        updateExercise({...exercise, repetitionNumber : +(value)})
    }
    function handlePauseRep(name , value){
        let l = exercise.pauseBetweenRepetition.slice();
        name === 'repetitonMin' ?
        l[0] = +(value)
        :
        l[1] = +(value);
        updateExercise({...exercise, pauseBetweenRepetition : l})
    }
    function handlePauseExe(name , value){
        let l = exercise.pauseBetweenExe.slice();
        name === 'exeMin' ?
        l[0] = +(value)
        :
        l[1] = +(value);
        updateExercise({...exercise, pauseBetweenExe : l})
    }
    function handleDuration(name , value){
        let l = exercise.duration.slice();
        name === 'durationMin' ?
        l[0] = +(value)
        :
        l[1] = +(value);
        updateExercise({...exercise, duration : l})
    }
    function handleCheckBox(e){
        e.preventDefault()
        let a = exercise.needTimer
        updateExercise({...exercise, needTimer : !(a)})
        
    }
    return (
        <div className='form-box'>
            <form onSubmit={(e)=>handleSubmit(e)}>
               <div className='input-box' > <label>Exercise Name</label>
                    <input type='text' name = 'name' placeholder='Pompes' 
                    onChange={(e)=>handleName(e.target.value)} />
               </div>
               <div className='input-box'> <label>Number of repetition </label>
                    <input type='number' min='0' step='1' name='repetiton'
                    onChange={(e)=> handleRepetition(e.target.value)} 
                        placeholder='1'
                    />
               </div>
               <div className='input-box'> <label>Pause between repetitions</label>
                    <div>
                        <input type='number' min='0' max='59' step='0' name='repetitonMin' className='time' 
                        placeholder='minutes' onChange={(e)=> handlePauseRep(e.target.name,e.target.value)}/>:
                        <input type='number' min='0' max='59' step='0' name='repetitionSec' className='time'
                         placeholder='secondes' onChange={(e)=> handlePauseRep(e.target.name,e.target.value)}/>
                    </div>
               </div>
               <div className='input-box'> <label>Pause between exercises</label>
                    <div>
                        <input type='number' min='0' step='0' max='59' name='exeMin' className='time'
                        placeholder='minutes' onChange={(e)=> handlePauseExe(e.target.name,e.target.value)}/>:
                        <input type='number' min='0' step='0' max='59' name='exeSec' className='time'
                        placeholder='secondes'onChange={(e)=> handlePauseExe(e.target.name,e.target.value)}/>
                    </div>
               </div>
              
               <div className='input-box'> <label>Do you need a timer during the exercise ? </label>
                    <button className='button checkbox'
                    onClick={(e)=> {handleCheckBox(e); return false}}
                    style={exercise.needTimer ? 
                    {backgroundColor:  'rgb(2, 253, 2)'}
                    :
                    {backgroundColor : 'red'}}
                    >
                        {exercise.needTimer ? 'YES' : 'NO'}
                    </button>
               </div>
               {exercise.needTimer && 
               <div className='input-box'><label>Exercise duration : </label>
                    <div>
                        <input type='number' min='0' step='0' max='59' name='durationMin'
                        className='time' placeholder='minutes'
                        onChange={(e)=> handleDuration(e.target.name,e.target.value)}
                        />:
                        <input type='number' min='0' step='0' max='59' name='durationSec'
                        className='time' placeholder='secondes'
                        onChange={(e)=> handleDuration(e.target.name,e.target.value)}
                        />
                    </div>
               </div>
               }       
               <div className='input-box'>
                    <input type='submit' className='button' value={'Add to Session'}/>
               </div>        
            </form>
            
        </div>
    )
}
export default Form