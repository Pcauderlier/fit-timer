import ExerciseBox from "./ExerciseBox"
import '../styles/ListeExercise.css'

export default function ListeExercise({list , updateList}){  

    return (
        <div className="list-box">
            {
               
                list.map((exercise)=>(

                <ExerciseBox 
                key={exercise.name === '' ? Math.random().toString() : exercise.name }
                name= {exercise.name}
                repetitionNumber = {exercise.repetitionNumber}
                pauseBetweenRepetition = {exercise.pauseBetweenRepetition}
                pauseBetweenExe = {exercise.pauseBetweenExe}
                needTimer = {exercise.needTimer}
                duration = {exercise.duration}

                />
                )
                )
            }
        </div>
    )
}