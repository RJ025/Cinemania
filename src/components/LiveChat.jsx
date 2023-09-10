import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const [inputMessage , setInputMessage] = useState("")

  const messages = useSelector(store => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(()=>{
    const timer = setInterval(()=>{
      /** 
       * APi POlLING
       */
      dispatch(addMessage({
        name : generateRandomName() ,
        text : makeRandomMessage(10)
      }))
      console.log("api polling")
    } , 200)

    return ()=>clearInterval(timer);
  } , [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name : "ritik" ,
      text : inputMessage
    }))
  }


  return (
    <div className='flex flex-col sm:w-1/4'>
      <div className="sm:w-full mt-3 h-[400px] bg-slate-100 overflow-y-scroll flex flex-col-reverse">
          {messages.map((c)=>{
            return <ChatMessage name={c.name} text={c.text}/>
          })}
          
      </div>
      <form className='flex flex-row w-full' onSubmit={(e)=>handleSubmit(e)}>
        <input
          type='text'
          value={inputMessage}
          onChange={(e)=>setInputMessage(e.target.value)}
          className='border border-red-400 p-2 w-3/4'
        />
        <button 
          className='bg-rose-400 border border-black w-1/4 hover:bg-rose-700 duration-1000'
          >Send
        </button>
      </form>
      
    </div>
    
  )
}

export default LiveChat