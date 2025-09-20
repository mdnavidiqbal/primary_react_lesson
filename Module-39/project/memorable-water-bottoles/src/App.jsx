
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
const bottlesPromise = fetch('../public/data.json')
      .then(res => res.json())

function App() {

  return (
    <>
      <h1>Awesome Water Bottols</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Bottles bottlesPromise = {bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
