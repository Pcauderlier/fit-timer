import ExerciseBox from "./ExerciseBox"
import '../styles/ListeExercise.css'
import { useEffect } from "react"

export default function ListeExercise({list , updateList}){  

    return (
        <div className="list-box">
            {
                
                list.map((i,index)=>(

                <ExerciseBox 
                key={i.exercise.name}
                index = {index}
                name= {i.exercise.name}
                repetitionNumber = {i.exercise.repetitionNumber}
                pauseBetweenRepetition = {i.exercise.pauseBetweenRepetition}
                pauseBetweenExe = {i.exercise.pauseBetweenExe}
                needTimer = {i.exercise.needTimer}
                duration = {i.exercise.duration}

                />
                )
                )
            }
        </div>
    )
}