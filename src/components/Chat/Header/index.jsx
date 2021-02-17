import React from 'react';
import chatSelector from '../../../contexts/Chat/selector';

const Header = () => {
  const { getSelectedChat } = chatSelector();

  const isAnyChatSelected =
    Object.keys(getSelectedChat).length > 0 ? true : false;

  return (
    <div className="w-full flex h-16 justify-between items-center bg-transparent">
      {isAnyChatSelected && (
        <>
          <div className="flex py-2">
            <div className="relative inline-block">
              <img
                className="inline-block object-cover w-12 h-12 rounded-full"
                src={getSelectedChat.contact.avatar}
                alt="Avatar"
              />
              <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col ml-2">
              <span className="text-normal text-left text-gray-700">
                {getSelectedChat.contact.name}
              </span>
              <span className="text-sm text-left text-gray-500">
                {getSelectedChat.contact.subname}
              </span>
            </div>
          </div>
          <div className="cursor-pointer">
            <svg
              className="text-black"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
