import React from 'react';
import Avatar from './Avatar';

export default function Profile({image,name,job,isNew}) {
  return (
    
    <div className='profile'>
      <Avatar isNew={isNew} image={image}/>
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}

