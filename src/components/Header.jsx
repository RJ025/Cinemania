import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineSearch} from "react-icons/ai"
import {PiUserCircleLight} from "react-icons/pi"
import {RiCloseFill} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/menuSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import { Link } from "react-router-dom"
import { storeCache } from "../utils/searchSlice"
import store from "../utils/store"
import { toggleTheme } from "../utils/themeSlice"
import logo from "../assets/download__1_-removebg-preview.png"
import { getAuth , onAuthStateChanged } from "firebase/auth"
import { signInWithGoogle , gooleSignOut } from "../utils/firebase"

export const Header = () => {

    const [searchQuery , setSearchQuery] = useState("");
    const [searchResults , setSearchResults] = useState([]);
    const [showSearch , setShowSearch] = useState(false);
    const [user , setUser] = useState(false);

    const auth = getAuth();


    const {name , email , profilePicture} = localStorage;


    const dispatch = useDispatch();
    const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
    const readCache = useSelector(store => store.searchCache)
    const isDarkTheme = useSelector(store => store.theme.isDarkTheme)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (user)=>{
            if(user)setUser(true);
            else setUser(false);
        })

        return () => unsubscribe();
    } , [auth])

    useEffect(()=>{
        /* 
        * make an api call after every key press
        * but if the diff. between 2 api calls <200ms
        * decline the api call
        */

        const timer = setTimeout(()=>{
            if(readCache[searchQuery])
            {
                setSearchResults(searchCache[searchQuery])
            }
            else
            {
                getSearchSuggestions();
            }
        } , 200)
        
        return () => {
            clearTimeout(timer);
        }
    } , [searchQuery])

    /*
    *    key : i
    *     -render the component
    *      -useEffect
    *      -start timet => make api call after 200ms

    *     key : ip
    *      -destroy the component (useEffect return method)
    *      -re-render the component
    *      -useEffect
    *      -start timer => make api call after 200ms

    *  setTimeout(200) => make api call after 200 ms
    */

    const getSearchSuggestions = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchResults(json[1]);
        dispatch(storeCache({[searchQuery]: json[1]}));
    }

    const handleClick = () =>{
        dispatch(toggleMenu());
    }
    
    const handleSignIn = ()=>{
        signInWithGoogle();
    }

    const handleTheme = ()=>{
        dispatch(toggleTheme())
    }

  return (
    <div className={"grid grid-flow-col p-2 shadow-lg sm:p-1" + (isDarkTheme ? " bg-black" : "")}>
        <div className="flex col-span-1">
            {isMenuOpen ? 
                <RiCloseFill className="mr-1 sm:h-20 sm:w-10 cursor-pointer" onClick={()=>handleClick()}/> : 
                <GiHamburgerMenu className="mr-1 sm:h-20 sm:w-10 cursor-pointer" onClick={()=>handleClick()}/>
            }
            <Link to="/">
                <img 
                    className={"w-16 h-4 px-2 sm:w-36 sm:h-10 sm:my-4 md:w-36 md:h-10" + (isDarkTheme ? " bg-white" : "")}
                    alt="logo" 
                    src={logo}
                    onClick={()=>setSearchQuery("")}
                />
            </Link>
        </div>
        <div className="flex  flex-col justify-start items-start  col-span-11 sm:col-span-11 ">
            <div className="flex justify-center items-center col-span-11 w-full sm:col-span-11 sm:mr-6 sm:mt-5">
                <input
                    className="px-1 py-1 sm:px-5 sm:w-1/2 border border-gray-400 p-2 rounded-l-full"
                    type="text"
                    placeholder="search"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    // onBlur={()=>setShowSearch(false)}
                    onFocus={()=>setShowSearch(true)}
                />
                <button className={"border border-gray-400 px-1 py-1 sm:px-5 sm:py-2 rounded-r-full bg-gray-100" + (isDarkTheme ? " bg-red-500" : "")}><AiOutlineSearch/></button>  
            </div>
            <div className=" bg-white fixed w-[220px] sm:w-[28rem] sm:left-[28rem] top-10 sm:top-16 shadow-lg rounded-lg border border-gray-100">
                {searchQuery && <ul>
                    {searchResults.map((res)=>
                        <Link to={"/result?search_query="+res} onClick={()=>setSearchQuery(res)}>
                            <li onClick={()=>setShowSearch(false)} className="py-1 px-1 sm:py-2 sm:px-3 shadow-sm hover:bg-gray-100">{res}</li>
                        </Link>
                    )}
                </ul>}
                
            </div>
        </div>
        <div  className="flex flex-col sm:flex-row items-center gap-1">
            <div className="col-span-1 flex justify-center items-center">
                {(profilePicture) ? (
                <img alt="profile" src={profilePicture} className="h-6 w-10 sm:h-10 rounded-full w-6 sm:w-10" />
                ) : (
                <PiUserCircleLight className="h-6 w-10 sm:h-10" />
                )}
            </div>
            {user ? (
                <button className="bg-red-700 px-1 text-white rounded-lg h-fit w-fit text-sm hover:bg-white hover:text-red-700 duration-500 sm:text-lg" onClick={gooleSignOut}>Sign Out</button>
            ) : (
                <button className="bg-red-700 px-1 text-white rounded-lg h-fit w-fit text-sm hover:bg-white hover:text-red-700 duration-500 sm:text-lg" onClick={handleSignIn}>Sign In</button>
            )}
        </div>
        

    </div>
  )
}

export default Header;
