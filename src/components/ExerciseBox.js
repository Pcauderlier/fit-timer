import '../styles/ExerciseBox.css'

export default function ExerciseBox({name,index,repetitionNumber,pauseBetweenRepetition,pauseBetweenExe,needTimer,duration,list,updateList}){
    function changeIndex(position) {// position est un string qui vaut n (next) ou p (previous)
        //index actuel
        let pos = position === 'n' ? +1 : -1;
        let toIndex = index  + pos;
        let newList = list.map((e)=> e);
        let elem = newList.splice(index,1)[0];
        newList.splice(toIndex,0,elem);
        updateList(newList)


    }

    return (
        <div className="exe-box" >
            <div className='index-box'>
            {index > 0 &&
                <button onClick={()=>changeIndex('p')}
                className={'prev butt'}>{'<=='} 
                </button>
            }
                <div className='index'> {index+1} </div>
            {index < list.length-1 &&
                <button onClick={()=>changeIndex('n')}
                    className={'next butt'} > {'==>'}</button>
            }
            </div>
            <h2 className='titre-exe'>{name}</h2>
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