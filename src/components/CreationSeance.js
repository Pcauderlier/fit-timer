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
        let dureExe;
        for (let i of newList ){
            l=[]
            dureExe = i.exercise.needTimer ? i.exercise.duration : [-2,-2];
            l.push(dureExe);
            console.log(i.exercise.repetitionNumber)
            for (let e=1 ; e < i.exercise.repetitionNumber;e++ ){
                l.push(i.exercise.pauseBetweenRepetition);
                l.push(dureExe);
            }
            l.push(i.exercise.pauseBetweenExe);
            i.exercise.timerList = l;
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