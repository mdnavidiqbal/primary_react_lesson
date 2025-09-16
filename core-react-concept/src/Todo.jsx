 
// Normal if else 

//   export default function Todo({task,isDone}){
//     if(isDone === true){
//         return <li>Done : {task}</li>
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
//   }

// export default function Todo(props){
//     return(
//         <li>Task: {props.task
        
//         }</li>
//     )
// }


//  Conditional rendering : 3 ternary 

// export default function Todo({task,isDone,time=0}){
//     return isDone ? <li>Done : {task} time : {time}</li> : <li>Not Done : {task} Time : {time}</li>
// }

// conditional rendering : 4 &&

// export default function Todo({task,isDone,time=0}){
//    return isDone && <li>Done Tasks : {task} time: {time}</li>
// }

// export default function Todo({task,isDone,time=0}){
//    return isDone || <li>Not Done Tasks : {task} time: {time}</li>
// }


 export default function Todo({task,isDone}){
    if(isDone === true){
        return null
    }
    else{
        return <li>Pending : {task}</li>
    }
  }