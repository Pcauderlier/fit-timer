import '../styles/ExerciseBox.css'

export default function ExerciseBox({name,repetitionNumber,pauseBetweenRepetition,pauseBetweenExe,needTimer,duration}){

    return (
        <div className="exe-box" >
        <h1>{name}</h1>
        </div>
    )
}