import React from 'react'
import { useDispatch } from 'react-redux'
import { getDescription, getVideoDescription } from '../utils/videoSlice';

const VideoCard = ({info}) => {

  const dispatch = useDispatch();

  dispatch(getDescription({
    [info?.id]: info?.snippet?.description
  }))

  dispatch(getVideoDescription({
    [info?.id]: info?.snippet?.title
  }))

  return (
    <div className='m-2 p-2 border rounded-lg w-60 shadow-lg'>
        <img alt="video-card" src={info?.snippet?.thumbnails?.medium?.url}/>
        <p className='font-bold'>{info?.snippet?.title}</p>
        <p>{info?.snippet?.channelTitle}</p>
        <p>{info?.statistics?.viewCount} views</p>
    </div>
  )
}



export const AdVideoCard = ({videoData})=>{
  return(
    <div className='border border-red-900 shadow-2xl'>
        <VideoCard info={videoData}/>
    </div>
  )
}

export default VideoCard;