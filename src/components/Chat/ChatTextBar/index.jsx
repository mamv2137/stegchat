import React, { useState } from 'react'

const ChatBar = ({
    onSend = () => null,
    onShowMessages = () => null
}) => {
    const [message, setMessage] = useState('')

    const getMessage = text => setMessage(text)
    
    const handleEnter = (event) => {
        if(event.key === 'Enter'){
            handleSendMessage()
        }
    }

    const handleSendMessage = e => {
        onSend(message)
        setMessage('')
    }
    return (
        <div className="flex w-full h-auto p-2 justify-center items-center bg-white shadow-lg rounded-3xl">
            <div className="flex bg-blue-100 rounded-full w-10 h-10 items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <input autoFocus onChange={(e) => getMessage(e.target.value)} onKeyPress={handleEnter} value={message} type="text" placeholder="Type a message here..." className="px-3 placeholder-gray-600 text-gray-800 bg-transparent rounded-3xl text-sm outline-none w-full pr-10 h-auto"/>
            <div className="flex cursor-pointer" onClick={onShowMessages}>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div onClick={handleSendMessage} className="flex bg-blue-100 rounded-full w-10 h-10 items-center justify-center ml-2 cursor-pointer">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </div>
        </div>
    )
}

export default ChatBar
