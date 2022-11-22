import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x,setX] =useState(0)
  const [y,setY] =useState(0)

  const handleMouseMove=(event)=>{  
    setX(event.clientX)
    setY(event.clientY)
  }

  return (
    <div className='container' onMouseMove={handleMouseMove}>
      <div className='pointer' style={{left:x+'px', top:y+'px'}}/>
    </div>
  );
}
