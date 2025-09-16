import { useState } from "react"

export default function Bowller(){

    const [bowls,setBowls] = useState(0)
    const handle1 = ()=>{
        const updateBowl = bowls+1;
        setBowls(updateBowl);
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
            bowls >= 6 && <p>Your Over is finished</p>
            }
            <h3>Over Count</h3>
            <p>Ball : {bowls}</p>
            <button onClick={handle1}>1</button>
            <button>No Ball</button>
            <button>Wid-Ball</button>
        </div>
    )
}