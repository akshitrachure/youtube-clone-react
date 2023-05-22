import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import Comments from './Comments';
import LiveChat from './LiveChat';

const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    
    const {description, videoDesc} = useSelector(store => store.video)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);


  return (
    
      <div className='p-5 px-20'>
        <div className='flex'>        
          <div>
              <iframe
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className='my-3 w-[61rem]'>
                <p className='font-bold text-xl'>{videoDesc[searchParams.get("v")]}</p>
                <div className='border bg-gray-100 rounded-lg my-7 p-5'>
                  <p className=''>{description[searchParams.get("v")]}</p>
                </div>
              </div>
          </div>
          <div>
            <LiveChat/>
          </div>
        </div>    
          
          <div className='mt-10'>
            <Comments/>
          </div>        
      </div>
      
    
  )
}

export default WatchVideo;