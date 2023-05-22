import React from 'react'
import Button from '../utils/Button';
import ButtonList from './ButtonList';
import VideoComponent from './VideoComponent';

const MainComponent = () => {

    
  return (
    <div className='col-span-11'>
        <ButtonList/>    
        <VideoComponent/>
    </div>    
  )
}

export default MainComponent