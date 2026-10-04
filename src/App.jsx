import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'
import './App.css'

function App() {
  //use hooks for update value in UI (useState) use.
  // setCounter - use can change name also like heloaCounter etc,
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
    }
  }
  const subValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1 className='text-purple-600 flex justify-center pt-9 text-5xl pb-12'>Counter Value: {counter}</h1>
      <div className='flex flex-col justify-center items-center'>
        <button onClick={addValue} className='px-2 py-2 w-22  text-white bg-gray-800 rounded-2xl'>Add + value</button>
        <br />
        <button onClick={subValue} className='px-2 py-2 w-22  text-white bg-gray-800 rounded-2xl'>Sub - value</button>
      </div>
    </>
  )
}

export default App
