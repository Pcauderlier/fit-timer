import Form from './Form';
import '../styles/CreationSeance.css'
import ListeExercise from './ListeExercise';
// Changer en page preLoad
export default function CreationSeance({list,updateList, startSeance, updateStartSeance,titre,updateTitre}){
    function handleTitre(){
        let t = [titre[0], false]
        updateTitre(t)
    }
    function addTimerList(){
        // But de la fonction : Crer une liste de lecture avec chaque timer de l'exercice
        let newList = list.map((e)=>e)

        let l = [];
        let txt = [];
        let dureExe;
        for (let i in newList ){
            l=[];
            txt=[];
            dureExe = newList[i].exercise.needTimer ? newList[i].exercise.duration : [-2,-2];
            l.push(dureExe);
            txt.push(newList[i].exercise.name)
           
            for (let e=1 ; e < newList[i].exercise.repetitionNumber;e++ ){
                l.push(newList[i].exercise.pauseBetweenRepetition);
                l.push(dureExe);
                txt.push('Pause')
                txt.push(newList[i].exercise.name)
            }
            if (list.length-1 > i ){
                l.push(newList[i].exercise.pauseBetweenExe);
                txt.push('Big Pause')
            }
            else{
                l.push([-3,-3]);
                txt.push('Good Job ! You re done !')
            }
            newList[i].exercise.timerList = l;
            newList[i].exercise.comentsList = txt;
        }
        updateList(newList)

    }
    return (
        <div className='page'>
            <button className='back' onClick={()=>handleTitre()}>back</button>
            <h1 className='titre-seance'>{titre[0]}</h1>
            <Form list={list} updateList={updateList}/>            
            <ListeExercise list={list} updateList={updateList} />
            {list.length  > 0 &&
                <button className='start' 
                onClick={()=>{ 
                addTimerList();
                updateStartSeance(true)}}
                
                >Start Session</button>
            }
            
        </div>
    )
}