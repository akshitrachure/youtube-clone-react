import React, { useEffect } from 'react'
import { USER_ICON_IMAGE } from '../utils/constants'

const UserLiveComment = ({name, message}) => {

    

  return (
    <div className='flex items-center m-2 p-2'>
        <img className='w-5 h-5' alt="livechat-user" src={USER_ICON_IMAGE}/>
        <p className='font-bold text-md px-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default UserLiveComment