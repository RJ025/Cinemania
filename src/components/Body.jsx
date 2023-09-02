import Sidebar from "./Sidebar"
import VideoContainer from "./VideoContainer"
import WatchVideo from "./WatchVideo"
import { Outlet } from "react-router-dom"

const Body = () => {



  return (
    <div className="grid grid-flow-col">
        <Sidebar/>
        <Outlet/>
        {/* <VideoContainer/> */}
    </div>
  )
}

export default Body