import React, { useState } from 'react';
import Counter from './Counter.jsx';

export default function AppCounter() {
  const [count, setCount] =useState(0)
  return (
    <div>
      <div className='banner'> Total : {count} {count < 10? '🥺' : '😎'}</div>
      <Counter total={count} setCount={setCount}/>
      <Counter total={count} setCount={setCount}/>
    </div>
  );
}

