import { useEffect, useState } from 'react';
import '../styles/Timer.css'



function Timer(){
   
    
    const [minute , updateMinute] = useState(0);
    const [seconde , updateSeconde] = useState(0);
    const [isTimerOn , updateIsTimerOn] = useState(false)
    const [isPaused , updateisPaused] = useState(false)
    

    function timerRun(){
        if (isTimerOn){
            if (seconde === 0){
                if (minute === 0){
                    return updateIsTimerOn(false)
                }
                else{
                    updateMinute(()=>minute-1)
                    updateSeconde(59)
                }
            }
            else{
                updateSeconde(()=>seconde -1)
            }
        }
    }
    function setTimer(m,s){
        updateIsTimerOn(true)
        updateMinute(m);
        updateSeconde(s)        
    }
    function timerPause(){
        updateisPaused(()=> !isPaused);
        updateIsTimerOn(()=> !isTimerOn)
    }
    useEffect(()=>{
        let timer = setTimeout(()=>{
            timerRun()},
            1000
        );
        return ()=> clearTimeout(timer)
    },
    [minute,seconde,isPaused]
    )
    

    return (
        <div className="timer-box">
            <h1>
                Test Timer
            </h1>
            <div>
                {minute < 10 ? `0${minute}` : minute.toString()} : 
                {seconde < 10 ? `0${seconde}` : seconde.toString()}
            </div>
            <button onClick={()=> setTimer(1,30) }>Lancer 01:30 </button>
            <button onClick={()=> timerPause() }>Pause</button>

        </div>
    )
}
export default Timer

