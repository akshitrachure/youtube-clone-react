import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideoCard } from './VideoCard';
// import { useDispatch } from 'react-redux';
// import { getDescription } from '../utils/videoSlice';

const VideoComponent = () => {

    const [videos, setVideos]=useState([]);
    // const dispatch = useDispatch();

    useEffect(()=>{
        getVideos();
    },[]);

    async function getVideos(){
        
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
        console.log(json.items);
    }

  return (
    <div className='flex flex-wrap'>
        <AdVideoCard videoData={videos[0]}/>
        {videos.map(video =>  <Link key={video?.id} to={"/watch?v=" + video?.id}> <VideoCard info={video}/> </Link>)}
        
    </div>
  )
}

export default VideoComponent;