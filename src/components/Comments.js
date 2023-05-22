import React from 'react'
import { USER_ICON_IMAGE } from '../utils/constants';

const commentsData = [
    {
        name: "Akshit Rachure",
        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        replies:[
            {
                name: "Akhil",
                text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                replies:[
                    {
                        name: "Akshit Rachure",
                        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                        replies:[
                            {
                                name: "Akhil",
                                text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                                replies:[]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Akshit Rachure",
        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        replies:[]
    },
    {
        name: "Akshit Rachure",
        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        replies:[
            {
                name: "Akhil",
                text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                replies:[]
            }
        ]
    },
    {
        name: "Akshit Rachure",
        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
        replies:[
            {
                name: "Akhil",
                text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                replies:[
                    {
                        name: "Akshit Rachure",
                        text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                        replies:[
                            {
                                name: "Akhil",
                                text: "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum",
                                replies:[]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



const SingleComment = ({comments}) => {
    return(
        <div className='flex m-3'>
            <img className='w-5 h-5' alt="comment-user" src={USER_ICON_IMAGE}/>
            <div className='ml-2'>
                <p className='font-semibold'>{comments.name}</p>
                <p className='pl-2'>{comments.text}</p>
                <p></p>
            </div>
        </div>
    )
}


const CommentsList = ({data}) =>{
    return data.map((d, index) => {
        return <div key={index}>
            <SingleComment comments={d}/>
            <div className='pl-5 pt-2 ml-5'>
                <CommentsList data={d.replies}/>
            </div>
        </div>
    })

    // return(
    //     <div>
    //         {
    //             data.map((d, index) => {
    //                 <div key={index}>
    //                     <SingleComment comments={d}/>
    //                     <CommentsList data={d.replies}/>
    //                 </div>                    
    //             })
    //         }
    //     </div>
    // )
}


const Comments = () => {

  return (
    <div className='m-5 ml-1 p-2 w-[61rem]'>
        <h1 className='font-semibold text-xl'>Comments:</h1>
        <CommentsList data={commentsData} />        
    </div>
  )
}

export default Comments;