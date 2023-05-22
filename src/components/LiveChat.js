import React, {useEffect, useState} from 'react'
import UserLiveComment from './UserLiveComment'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomNameGenerator, randomStringGenerator } from '../utils/helper';

const LiveChat = () => {

    const [userText, setUserText] = useState("");

    const dispatch = useDispatch();

    const chat = useSelector(store => store.chat.messages);

    useEffect(()=>{
        const intervals = setInterval(()=>{
            dispatch(addMessage({
                name: randomNameGenerator(),
                message: randomStringGenerator()
            }))
        },2000)

        return () => clearInterval(intervals)
    },[])

  return (
    <>
        <div className='mx-3 p-2 border border-black w-[400px] h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
            {chat.map((chats, index) => <UserLiveComment key={index} name={chats.name} message={chats.message}/>)}        
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name: "Akshit",
                message: userText,
            }))
            setUserText("");
        }}>
            <input className=' m-3 p-2 rounded-md w-[280px] border border-black' type="text" value={userText} onChange={(e)=>setUserText(e.target.value)} placeholder="Type a message here"/>
            <button className='bg-green-200 w-[100px] rounded-md h-[42px]'>Send</button>
        </form>
    </>
    
  )
}

export default LiveChat;