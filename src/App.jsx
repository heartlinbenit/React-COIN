import React from 'react'
import { useState } from 'react';

function App() {
  const [flip, setFlip] = useState(0); 
  const [count, setCount] = useState(0)

  
  function handleClick() {
    setFlip(Math.floor(Math.random() * 2))
    setCount(count + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className='text-5xl text-purple-900 font-bold'>COIN FLIP</p>
    <div>
       {flip==1 ? (<div className="mt-5">
        <img src="/public/tail.jpg" alt="Flipped or Original" className="rounded-lg"  onClick={handleClick}/>
      </div>) : ( <div className="mt-5">
         <img src="/public/head.jpg" alt="Flipped or Original" className="rounded-lg"  onClick={handleClick}/>
       </div>)}
    </div>
    <div>{count}</div>

      <div className="mt-3 text-3xl font-bold">
          It's a {flip ==1 ? "TAIL" :"HEAD"}!
      </div>
    </div>
  );
}

export default App;


