import React from 'react'
import {PiUserCircleLight} from "react-icons/pi"

const ChatMessage = ({name , text}) => {
  return (
    <div className='flex flex-wrap items-center p-3'>
        <PiUserCircleLight className="h-6 w-10 sm:h-6"/>
        <h1 className='font-bold'>{name}</h1>
        <p className='w-fit ml-2'>{text}</p>        
    </div>
  )
}

export default ChatMessage