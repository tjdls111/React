import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] =useState({x:0,y:0})
  const handleMouseMove=(event)=>{  
    setPosition({x:event.clientX,y:event.clientY})
  }

  return (
    <div className='container' onMouseMove={handleMouseMove}>
      <div className='pointer' style={{left:position.x+'px', top:position.y+'px'}}/>
    </div>
  );
}
