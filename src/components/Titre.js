import '../styles/Titre.css'
export default function Titre({updateTitre , titre}){
    function handleButton(){
        if (titre[0]===''){
            alert('Please enter a valid Title for your session')
        }
        else{
            let t = [titre[0], true];
            updateTitre(t)
        }
       
    }
    return (
        <div className='title'>
            <h1> Enter the title of your Session : </h1>
            <input type='text' 
            className='inp'
            onChange={(e)=>
            updateTitre([e.target.value , false])
            }/>
            <button className='valid'
            onClick={()=> handleButton()}
            >Next</button>
        </div>
    )
}