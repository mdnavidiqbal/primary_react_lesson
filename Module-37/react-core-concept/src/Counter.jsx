import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const CounterStyle ={
        border : '7px solid green',
        padding : '10px',
        margin : '10px',
        color : 'aqua',
        borderRadius : '20px'
    }
    return(
        <div style={CounterStyle}>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Click</button>
        </div>
    )
}