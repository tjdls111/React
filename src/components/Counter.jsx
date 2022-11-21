import React, { useState } from 'react';

export default function Counter({setCount}) {
  const [number, setNumber]=useState(0)
  return (
    <div className='counter'>
     <div className='number'>
      {number}
     </div>
     <button className="counter-btn" onClick={()=>{
      setNumber((prev)=>{ return prev+1})
      setCount((prev)=>{return prev+1})
      }}>Click</button>
    </div>
  );
}

