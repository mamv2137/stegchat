import React from 'react'

const ChatContent = () => {
    return (
        <div className="w-full flex flex-col flex-1 bg-transparent p-4 overflow-y-auto scrollbar-thin" id="chat-scroll">
            {/**Chat Message*/}
            <div className="flex my-1">
                <img className="inline-block object-cover w-6 h-6 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <div className="flex flex-col font-semibold  rounded-r-3xl rounded-b-3xl shadow-md h-auto w-1/2 bg-pink-150 m-1 p-4 justify-self-start text-left">
                <p className="flex font-semibold text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, rem unde illo laudantium dolorem, totam modi nihil rerum nulla ipsa corrupti error nam eius velit minima excepturi similique sunt quasi!
                </p>
                <span className="text-xs font-normal mt-1 text-gray-100">5m ago</span>
                </div>
            </div>
            {/**Chat own Message*/}
            <div className="flex my-1 flex-row-reverse">
                <img className="inline-block object-cover w-6 h-6 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <div className="flex flex-col rounded-l-3xl rounded-b-3xl shadow-lg h-auto w-1/2 bg-white m-1 p-4 justify-self-start text-right">
                <p className="flex font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. ✌
                </p>
                <span className="text-xs font-medium mt-1 text-gray-500">5m ago</span>
                </div>
            </div>
        </div>
    )
}

export default ChatContent
