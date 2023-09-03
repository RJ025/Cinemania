import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import VideoContainer from "./VideoContainer"

const Body = () => {

  return (
    <div className="grid grid-flow-col">
        <Sidebar/>
        <VideoContainer/>
    </div>
  )
}

export default Body