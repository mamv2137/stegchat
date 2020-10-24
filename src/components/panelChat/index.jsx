import React from 'react'
import { StyledPanelChatContainer } from './StyledPanelChat.styles.tw'

const PanelChat = () => {
    return (
        <StyledPanelChatContainer>
            {/**Boton Create new */}
            <div className="flex h-auto p-2 bg-white rounded-3xl shadow-lg justify-between items-center cursor-pointer">
                <div className="flex bg-blue-100 rounded-full w-12 h-12 items-center justify-center">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <span className="font-medium flex-1">Create New</span>
            </div>
            {/**Label */}
            <div className="my-6 flex justify-start">
                <span className="text-xl font-bold">Chats</span>
            </div>
            {/**Input */}
            <div className="my-1 flex justify-center">
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input type="text" placeholder="Search name..." className="px-3 py-3 placeholder-gray-600 text-gray-800 relative  bg-blue-100 rounded-3xl text-sm outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
                    <span className="z-10 h-full leading-snug font-normal text-center text-gray-600 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        <svg className="w-6 h-6 pr-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
                </div>
            </div>
            {/**Chats */}
            <div className="my-1 flex flex-col divide-y divide-gray-200 overflow-y-auto scrollbar-thin" id="chat-scroll">
            {/**Chat*/}
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
                <div className="flex py-2 cursor-pointer">
                    <div className="relative inline-block">
                        <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col ml-2">
                        <span className="text-normal text-gray-700">Zahib Gargia</span>
                        <span className="text-sm text-left text-gray-500">5min ago</span>
                    </div>
                </div>
            </div>
        </StyledPanelChatContainer>
    )
}

export default PanelChat