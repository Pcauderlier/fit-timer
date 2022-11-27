import '../styles/ExerciseBox.css'

export default function ExerciseBox({name,index,repetitionNumber,pauseBetweenRepetition,pauseBetweenExe,needTimer,duration}){
 
    return (
        <div className="exe-box" >
        <div className='index'>{index+1}</div>
        <h2>{name}</h2>
        <div>Number of repetitions : {repetitionNumber}</div>
        <div>Pause between repetition : </div>
        <div>
        {' '+pauseBetweenRepetition[0]+ ` min${pauseBetweenRepetition[0] > 1 ? 's' : ''}`
        + ' and ' + 
        pauseBetweenRepetition[1]+ ` sec${pauseBetweenRepetition[1] > 1 ? 's' : ''}`}
        
        </div>
        <div>Pause before next Exercise : </div>
        <div>
        {' '+pauseBetweenExe[0]+ ` min${pauseBetweenExe[0] > 1 ? 's' : ''}`
        + ' and ' + 
        pauseBetweenExe[1]+ ` sec${pauseBetweenExe[1] > 1 ? 's' : ''}`}
        </div>
        {needTimer &&
        <div>
        <div>Duration of the exercise : </div>
        <div>
        {' '+duration[0]+ ` min${duration[0] > 1 ? 's' : ''}`
        + ' and ' + 
        duration[1]+ ` sec${duration[1] > 1 ? 's' : ''}`}
        </div>
        </div>
        }
        </div>
    )
}