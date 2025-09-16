
import './App.css'
import Todo from './Todo'
function App() {
  return (
      <>
      <h1>React Core Concept</h1>
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Navid name="MD.Navid Iqbal" post="Devops Engineer" tech="AWS,Kubernet"></Navid> <br />
      <Navid name="Abdur Rahim" post="Frontend Developer" tech="React,JS,Tailwind"></Navid> <br />
      <Navid name="Udvash Ullah" post="Backend Developer" tech="MySql,Python"></Navid> <br />
      <Player name='Tamim Iqbal' post='Batsman'></Player> <br />
      <Player name='Shakib Al Hasan' post='Allrounder'></Player> */}
      <Todo task="Let's Learn React" time="50" isDone={true}></Todo>
      <Todo task="Let's Learn Js" time="150" isDone={false}></Todo>
      <Todo task="Let's Learn Python" time="250" isDone={true}></Todo>

      </>
  )
}

function Student(){
  return(
    <div className='styel'>
    <p>I am a studen</p>
    <p>Name :</p>
    <p>Department :</p>
    </div>
  )
}

function Person(){
  const age = 27;
  const name = "navid";
  const personStyle ={
    color: 'pink',
    textAlign: 'center'
  }
  return(
    <p style={personStyle}>I am a person : {name} {age}</p>
  )
}

function Navid(props){
  return(
    <div style={{
      border : '2px solid green',
      borderRadius : '20px',
      color : 'aquamarine'
    }}>
      <h3>My Details</h3>
      <p>Name: {props.name}</p>
      <p>Position: {props.post}</p>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Developer(){
  return(
    <div>
      <h3>Developer</h3>
      <p>Name :</p>
      <p>Technology: </p>
    </div>
  )
}


function Player({name,post}){
  return(
    <div style={{
      border : '1px solid red',
      borderRadius : '20px'
    }}>
    <p>Name : {name}</p>
    <p>Position : {post}</p>
  </div>
  )
}
export default App
