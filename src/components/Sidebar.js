import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    
    if(!isMenuOpen)
        return null;

  return (
    <div className='p-2 w-48 m-2 shadow-lg col-span-1'>
        <div className='pt-2'>
            <p className='pt-1 cursor-pointer'>Home</p>
            <p className='pt-1 cursor-pointer'>Shorts</p>
            <p className='pt-1 cursor-pointer'>Subscription</p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold'>Subscriptions</h1>
            <p className='pt-1 cursor-pointer'>Library</p>
            <p className='pt-1 cursor-pointer'>History</p>
            <p className='pt-1 cursor-pointer'>Your Videos</p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold'>Watch Later</h1>
            <p className='pt-1 cursor-pointer'>Videos</p>
            <p className='pt-1 cursor-pointer'>Shorts</p>
            <p className='pt-1 cursor-pointer'>Channels</p>
        </div>

        <div className='pt-2'>
            <p className='pt-1 cursor-pointer'>Home</p>
            <p className='pt-1 cursor-pointer'>Shorts</p>
            <p className='pt-1 cursor-pointer'>Subscription</p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold'>Subscriptions</h1>
            <p className='pt-1 cursor-pointer'>Library</p>
            <p className='pt-1 cursor-pointer'>History</p>
            <p className='pt-1 cursor-pointer'>Your Videos</p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold'>Watch Later</h1>
            <p className='pt-1 cursor-pointer'>Videos</p>
            <p className='pt-1 cursor-pointer'>Shorts</p>
            <p className='pt-1 cursor-pointer'>Channels</p>
        </div>
    </div>
  )
}

export default Sidebar