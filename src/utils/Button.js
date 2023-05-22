import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='cursor-pointer bg-gray-100 rounded-lg px-3 py-1'>{name}</button>
    </div>
  )
}

export default Button