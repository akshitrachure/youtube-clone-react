import React from 'react'
import Button from '../utils/Button';
const ButtonList = () => {
    const buttonNames = ["All", "Comedy", "Music", "Cricket", "Football", "Food", "Style", "Cooking", "Spiritual", "Live", "Indian", "Regional", "International"];
  return (
    
        <div className='flex p-2 m-2'>
            {buttonNames.map(button=> <div key={button} className='pl-3'><Button  name={button}/></div>)}
        </div> 
    
  )
}

export default ButtonList