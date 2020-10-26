import React from 'react'

const Header = () => {
    return (
        <div className="w-full flex h-16 justify-between items-center bg-transparent">
            <div className="flex py-2">
                <div className="relative inline-block">
                    <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                    <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex flex-col ml-2">
                    <span className="text-normal text-gray-700">Zahib Gargia</span>
                    <span className="text-sm text-left text-gray-500">alahu akbar...</span>
                </div>
            </div>
            <div className="cursor-pointer">
                <svg className="text-black" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </div>
    )
}

export default Header
