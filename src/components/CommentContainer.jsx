import React, { useState } from 'react'
import {PiUserCircleLight} from "react-icons/pi"
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'

const data = [
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "test_user",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "test_user",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "test_user",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "test_user",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "test_user",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "test_user",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "test_user",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "test_user",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const Comment = ({name , text}) => {
    return (
        <div className='flex flex-col w-full items-start p-2 border-none'>
            <div className='flex flex-row items-center px-2'>
                <PiUserCircleLight className='w-9'/>
                <span className='font-bold '>{name}</span>
            </div>
            <span className='ml-10'>{text}</span>
        </div>
    )
}

const CommentList = ({comments}) => {
    return (
        <div className='p-2'>
            {comments.map((c)=>{
                return <div>
                    <Comment name = {c.name} text={c.text}/>
                    <div className="pl-5 border-l border-l-black ml-5">
                        <CommentList comments={c.replies}/>
                    </div>
                </div> 
            })}
           
        </div>
    )
}

const CommentContainer = () => {
    const [showComments , setShowComments] = useState(false);

  return (
    <div className="m-1 sm:m-5 p-2 ">
        <div onClick={()=>setShowComments(!showComments)}  className='flex flex-row justify-between items-center bg-slate-200 p-3 rounded-lg'>
            <h1 className="text-2xl font-bold">Comments: </h1>
            <div>
                {
                    (showComments) ? 
                        <div onClick={()=>setShowComments(!showComments)} >
                            <IoIosArrowUp className='h-4'/>
                        </div> :
                        <div onClick={()=>setShowComments(!showComments)}>
                            <IoIosArrowDown/>
                        </div>
                }
            </div>
        </div>
        
        <div className='' >
            {
                (showComments)?<CommentList comments = {data}/>:null
            }
        </div>
    </div>
   
  )
}

export default CommentContainer