import React, { useContext } from 'react';
import { ModalContext } from '../Modal/context';

const PanelConfig = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="flex-initial flex flex-col text-gray-700 bg-white p-4 m-2 w-1/5 rounded-3xl cursor-pointer">
      <div className="flex flex-col justify-center items-center">
        <img
          className="inline-block object-cover w-24 h-24 rounded-full mb-4 mt-8 border-white border-8 shadow-2xl"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile"
        />
        <div className="font-bold py-0 text-black">Zahib Garcia la lacrita</div>
        <div className="font-normal py-0 text-gray-600 text-sm">
          Una description chiebre
        </div>
      </div>

      <div
        className="flex flex-col mt-4 flex-1 overflow-y-auto scrollbar-thin"
        id="chat-scroll"
      >
        {/**Collapsible */}
        <div className="flex flex-col p-2 my-2 bg-gray-100 rounded-3xl group hover:h-auto">
          <div className="flex justify-between items-center group-hover:border-b-2 group-hover:pb-1 transition ease-in duration-300">
            <div className="flex justify-center items-center m-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  fill="none"
                  className="w-5 h-5 text-blue-1000"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Setting</span>
            </div>
            <div className="flex rounded-full w-10 h-10 items-center justify-center">
              <svg
                className="w-5 h-5 transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {/**Collapsible content
           *
           * true: flex h-auto
           * false: hidden h-0
           * hidden max-h-0 transition-all duration-700 ease-out group-hover:flex group-hover:h-auto
           *
           */}
          <div
            className="flex-col m-1 hidden h-0 overflow-y-auto group-hover:flex group-hover:h-auto"
            id="chat-scroll"
          >
            <div className="flex items-center py-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Information</span>
            </div>
            <div className="flex items-center py-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Information</span>
            </div>
            <div className="flex items-center py-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Information</span>
            </div>
            <div className="flex items-center py-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Information</span>
            </div>
            <div className="flex items-center py-1">
              <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="font-medium ml-4">Information</span>
            </div>
          </div>
        </div>

        <div className="flex h-auto p-2 my-2 bg-red-200 rounded-3xl justify-between items-center">
          <div className="flex justify-center items-center m-1">
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <span className="font-medium ml-4">Information</span>
          </div>
          <div className="flex rounded-full w-10 h-10 items-center justify-center cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="flex h-auto p-2 my-2 bg-green-200 rounded-3xl justify-between items-center">
          <div className="flex justify-center items-center m-1">
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
              <svg
                className="w-5 h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </div>
            <span className="font-medium ml-4">Files</span>
          </div>
          <div className="flex rounded-full w-10 h-10 items-center justify-center cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelConfig;
