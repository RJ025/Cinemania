import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { API_KEY } from '../utils/constants'
import { useSearchParams } from 'react-router-dom'
import ResultVideoCard from './ResultVideoCard'

const ResultVideoContainer = () => {

    const [searchVideoList , setSearchVideoList] = useState([]);

    const [searchParams , setSearchParams] = useSearchParams();
    const params = searchParams.get("search_query")
    console.log(params);

    useEffect(()=>{
        getVideos();
        console.log("render");
        // return ()=>{
        //     setSearchParams(searchParams.get("search_query"))
        // }
    } , [params])

    const getVideos = async() => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${params}&key=${API_KEY}`)
        const json = await data.json();
        console.log(json.items);
        setSearchVideoList(json.items);
    }

  return (
    <div className='grid grid-flow-col'>
        <Sidebar/>
        <div className='col-span-11 flex flex-col w-[100%] sm:flex-wrap'>
            {searchVideoList.map((video)=>{
                return <ResultVideoCard info = {video}/>
            })}
        </div>
        
    </div>
  )
}

export default ResultVideoContainer