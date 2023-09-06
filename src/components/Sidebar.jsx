import {AiFillHome} from "react-icons/ai";
import {PiFilmReelBold} from "react-icons/pi";
import {MdSubscriptions} from "react-icons/md";
import {BiLibrary} from "react-icons/bi";
import {AiOutlineHistory} from "react-icons/ai";
import {BiSolidVideos} from "react-icons/bi";
import {MdLocalMovies} from "react-icons/md";
import {MdWatchLater} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.menu.isMenuOpen)

    if(!isMenuOpen)return null;

    return (
        <div className="col-span-1 shadow-lg py-4 px-4 h-[100%] border-rose-500">
            <Link to="/"><div className="flex justify-between items-center gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <AiFillHome/>
                <span >Home</span>
            </div></Link>
            <div className="flex justify-between items-center  gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <PiFilmReelBold/>
                <span >Shorts</span>
            </div>
            <div className="flex justify-between items-center py-4 gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <MdSubscriptions/>
                <span className="pl-6">Subscription</span>
            </div>
            <div className="flex justify-between items-center gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <BiLibrary/>
                <span  >Library</span>
            </div>
            <div className="flex justify-between items-center py-4 gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <AiOutlineHistory/>
                <span className="">History</span>
            </div>
            <div className="flex justify-between items-center gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <BiSolidVideos/>
                <span >My Videos</span>
            </div>
            <div className="flex justify-between items-center py-4 gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <MdLocalMovies/>
                <span >Movies</span>
            </div>
            <div className="flex justify-between items-center gap-1/2 py-3 px-4 rounded-lg hover:bg-slate-200 cursor-pointer">
                <MdWatchLater/>
                <span >Watch Later</span>
            </div>
        </div>
    )
}

export default Sidebar;