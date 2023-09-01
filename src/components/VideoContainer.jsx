import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import Video from "./Video";
const VideoContainer = () => {

    const [videos , setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    } , [])

    const getVideos = async()=>{
        try{
            const data = await fetch(YOUTUBE_VIDEO_API);
            const json = await data.json();
            console.log(json.items);
            setVideos(json.items);
        }
        catch{(err=>console.log(err))}
        
    }

    return (videos.length===0)?null: (
        <div className="col-span-11 flex flex-col w-[100%] sm:flex-row sm:flex-wrap">
            {videos.map((video)=><Video key={video.id} info={video}/>)}
            
        </div>
    )
}

export default VideoContainer