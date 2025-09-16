
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowller from './Bowller'

function App() {
  function handleClick (){
    alert('I am clicked') // Rules-1 : Add eventHandler
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){  // Rules-2: Add eventHandler
        alert('I am second button clicked')
      }}>Click Me2</button> 
      {/* Rules-3: using arrow function
       */}
       <button onClick={() => alert('Cliked button-3')}>Click Me3</button> <br />
       <Counter></Counter>
       <Batsman></Batsman>
       <Bowller></Bowller>
    </>
  )
}

export default App
