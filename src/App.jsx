import React from "react";
import "./index.css";

import SideBar from './components/sidebar'
import PanelChat from './components/panelChat'

import {MainLayout, AppContainer} from "./MainLayout.styles.tw";

import sc from 'stegcloak'

const App = () => {
  const stegcloak = new sc(true, false)
  const magic = stegcloak.hide("Voldemort is back", "mischief managed", "The WiFi's not working here!");
  console.log(magic)
  const secret = stegcloak.reveal(magic, "mischief managed");
  console.log(secret);
  return (
    <MainLayout>
      <AppContainer>
        <SideBar />
         {/** Main content */}
        <div className="flex flex-1 text-center bg-gray-100 p-4 m-1 rounded-3xl">
          {/** menu chats */}
          <PanelChat />
          {/** content chats */}
          <div className="flex flex-col flex-1 bg-transparent rounded-3xl m-1 px-4">
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
            {/**Content Chat */}
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
            {/**Messaging text bar Chat */}
            <div className="flex w-full h-auto p-2 justify-center items-center bg-white shadow-lg rounded-3xl">
              <div className="flex bg-blue-100 rounded-full w-10 h-10 items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
              <input type="text" placeholder="Type a message here..." className="px-3 placeholder-gray-600 text-gray-800 bg-transparent rounded-3xl text-sm outline-none w-full pr-10 h-auto"/>
              <div className="flex cursor-pointer">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="flex bg-blue-100 rounded-full w-10 h-10 items-center justify-center ml-2 cursor-pointer">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/** Menu chat */}
        <div className="flex-initial flex flex-col text-gray-700 bg-white p-4 m-2 w-1/5 rounded-3xl cursor-pointer">
          <div className="flex flex-col justify-center items-center">
            <img className="inline-block object-cover w-24 h-24 rounded-full mb-4 mt-8 border-white border-8 shadow-2xl" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
            <div className="font-bold py-0 text-black">Zahib Garcia la lacrita</div>
            <div className="font-normal py-0 text-gray-600 text-sm">Una description chiebre</div>
          </div>

          <div className="flex flex-col mt-4 flex-1 overflow-y-auto scrollbar-thin" id="chat-scroll">

            <div className="flex flex-col h-25 p-2 my-2 bg-gray-100 rounded-3xl group hover:h-auto">
              <div className="flex justify-between items-center group-hover:border-b-2 group-hover:pb-1">
                <div className="flex justify-center items-center m-1">
                  <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                    <svg fill="none" className="w-5 h-5 text-blue-1000" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium ml-4">Setting</span>
                </div>
                <div className="flex rounded-full w-10 h-10 items-center justify-center">
                  <svg className="w-5 h-5 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              {/**Collapsible content 
               * 
               * true: flex h-auto
               * false: hidden h-0
               * 
              */}
              <div className="flex-col m-1 hidden max-h-0 transition-all duration-700 ease-out group-hover:flex group-hover:max-h-full">
                <div className="flex items-center py-1">
                  <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <span className="font-medium ml-4">Information</span>
                </div>
                <div className="flex items-center py-1">
                  <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <span className="font-medium ml-4">Information</span>
                </div>
              </div>
            </div>

            <div className="flex h-auto p-2 my-2 bg-red-200 rounded-3xl justify-between items-center">
              <div className="flex justify-center items-center m-1">
                <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <span className="font-medium ml-4">Information</span>
              </div>
              <div className="flex rounded-full w-10 h-10 items-center justify-center cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </MainLayout>
  );
};

export default App;
