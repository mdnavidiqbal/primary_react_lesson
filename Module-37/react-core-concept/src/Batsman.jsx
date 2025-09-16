import { useState } from "react"

export default function Batsman(){
    // Fpr total score 
    let [runs,setRuns] = useState(0);

    // For six count
    const [sixes,setSixes] = useState(0)

    // eventHandler for single run
    const handleSingle = () =>{
        const updateRuns = runs +1;
        setRuns(updateRuns);
    }
    // // eventHandler four
    const handleFour = () =>{
        const updateRuns = runs+4;
        setRuns(updateRuns);
    }

    // // eventHandler six
    const handleSix = () =>{
        const updateRuns = runs+6;
        setRuns(updateRuns);
        // For count sixes 
        const updateSixes = sixes+1;
        setSixes(updateSixes);
    }
    return(
        <div style={{
            border : '2px solid tomato',
            color : 'darkcyan',
            borderRadius : '20px',
            margin : '10px',
            textAlign : 'center',
            padding : '10px'
        }}>
            {
            runs >= 50 && <p>Your Score is : 50 </p>
            }
            <h1>Player : Bangladeshi Batsman</h1>
            <p>Sixes : {sixes}</p>
            <h3>Score : {runs}</h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
        
    )
}