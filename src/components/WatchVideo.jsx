import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/menuSlice';
import { useSearchParams } from 'react-router-dom';
import { SINGLE_VIDEO_API } from '../utils/constants';

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
    <div className='col-span-11 w-[100%] p-2 sm:w-2/3  rounded-lg border-gray-400'>
        <iframe
            className='w-[100%] sm:h-[450px] sm:p-4 ' 
            width="" 
            height="220" 
            src={`https://www.youtube.com/embed/${video_id}?si=9LaxRU15FctV27Wb&amp;start=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchVideo