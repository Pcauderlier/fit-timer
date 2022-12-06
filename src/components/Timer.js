import { useEffect, useState } from 'react';
import '../styles/Timer.css'
import styled from 'styled-components';

const ChargingBar = styled.div`
margin-top: 30px;
width :100%;
background-color: green;
height : 25px;
border-left : solid black 4px;
border-right : solid black 4px;
transform : scaleX(${({size})=> size})

`



function Timer({list,curseurExe,updateCurseurExe,curseurInterne,updateCurseurInterne, triggerNext}){
   
    
    const [minute , updateMinute] = useState(0);
    const [seconde , updateSeconde] = useState(0);
    const [isTimerOn , updateIsTimerOn] = useState(false);
    const [isPaused , updateisPaused] = useState(false);
    const [size, setSize] = useState(0);
    const [fullTime , updateFullTime] = useState(0)



    
    function nextTimer(n){ // number ==> 1 pour next / 0 pour recomencer / -1 pour previous
        if (list[curseurExe].exercise.timerList.length > curseurInterne+n){ //Verif que timer list est contient le curseur+n
            //!!! Latence sur Usestate donc update dans la fonction puis avec usestate
            setTimer(list[curseurExe].exercise.timerList[curseurInterne+n][0],
                list[curseurExe].exercise.timerList[curseurInterne+n][1]
            )

            updateCurseurInterne((e)=> e+n)

            //Accroche toi quand  tu relira sa putain !
            
        }
        else{ //Cas 2 : Pas de suite dans Timer List donc on doit verif si suite dan liste Exe
            if (list.length > curseurExe+n){ // Suite dans liste Exe OK
                
                
                setTimer(list[curseurExe+n].exercise.timerList[0][0],
                    list[curseurExe+n].exercise.timerList[0][1]
                )
                updateCurseurExe((e)=> e+n)
                updateCurseurInterne(0)
            }
            else{ // Pas de suite dans liste exe
                return updateIsTimerOn(false) //Seance Terminee
            }
        }
    }

    function timerRun(){
        if (minute < 0  ){

            return updateIsTimerOn(false)
            
        }
        if (isTimerOn){
            if (seconde===0){
                if (minute === 0){
                    nextTimer(1)
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

        updateMinute(m);
        updateSeconde(s);        
    }
    function timerPause(){
        updateIsTimerOn(()=> !isTimerOn)
        updateisPaused(()=> !isPaused); //juste un trigger pour appeler Useeffect

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
    useEffect(()=>{ // Sert a declencher la fonction nextTimer depuis le component : ListeExeBorderTop
        nextTimer(0)
    },
    [triggerNext])
    

    return (
        <div className="timer-box">
            {minute === -2 ? 
           <div className='exe-remplace-chrono chrono'> Exercise Time !</div>
           :
           minute === -3 ? // Fin de la seance, on affiche un msg dans H1
           null
           :
            <div className='chiffres-chronos chrono'>

                {minute < 10 ? `0${minute}` : minute.toString()} : 
                {seconde < 10 ? `0${seconde}` : seconde.toString()}
            </div>
            }
            <ChargingBar size = {size}/>
            <button onClick={()=>{setTimer(list[0].exercise.timerList[0][0],
                list[0].exercise.timerList[0][1]);
                updateCurseurExe(0);
                updateCurseurInterne(0)
            }}>REStart Session</button>
            <button onClick={()=>{updateIsTimerOn(true);nextTimer(1)}} >
            Next </button>
            <button onClick={()=> {updateIsTimerOn(false);nextTimer(0)}}> Restart timer</button>
            <button onClick={()=> timerPause() }>{isTimerOn ? 'Pause' : 'Play'}</button>

        </div>
    )
}
export default Timer

