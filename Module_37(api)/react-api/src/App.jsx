
import { Suspense } from 'react'
import './App.css'
import Users from './user';
import Friends from './Friends';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
      .then(rest => rest.json())

const fetchFriends = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
    const fetchPromise = fetchFriends();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser ={fetchUser}></Users>
      </Suspense>
      <Suspense fallback="Wait a moment for him">
        <Friends fetchPromise = {fetchPromise}></Friends>
      </Suspense>
    </>
  )
}

export default App
