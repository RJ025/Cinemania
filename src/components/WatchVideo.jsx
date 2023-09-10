import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';
import { SINGLE_VIDEO_API } from '../utils/constants';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import VideoContainer from './VideoContainer';

const WatchVideo = () => {

    const [searchParams] = useSearchParams();
    const video_id = searchParams.get("v");

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
        getVideoInfo();
    } , [])

    const getVideoInfo = async()=>{
        const data = await fetch(SINGLE_VIDEO_API);
        const json =  await data.json();
        console.log(json);
    }

  return (
    <div className='col-span-11 w-full p-2 sm:w-full  rounded-lg border-gray-400'>
        <div className='flex flex-col sm:flex-row w-full'>
            <iframe
                className='w-[100%] sm:h-[450px] sm:w-3/4 sm:p-4 ' 
                width="" 
                height="220" 
                src={`https://www.youtube.com/embed/${video_id}?si=9LaxRU15FctV27Wb&amp;start=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <LiveChat />
        </div>
        <div className='mt-3 p-2 sm:w-3/4'>
            <CommentContainer/>
            <div className=''>
                 <VideoContainer/>
            </div>
           
        </div>
    </div>
  )
}

export default WatchVideo