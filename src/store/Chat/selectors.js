import { selector, selectorFamily } from 'recoil';

import { chats } from './atoms';

import mockChats from '../../mockData/chats';
import mockUsers from '../../mockData/users';

export const getChats = selector({
  key: 'filterChats',
  get: ({ get }) => get(chats),
  set: ({ set }, chatsIds) => {
    const userChats = chatsIds
      .map((id) => {
        const chat = mockChats.find((chat) => chat.id === id);
        return Object.assign({}, chat, {
          isSelected: false,
        });
      })
      .map((chat) => {
        const contact = mockUsers.find((user) => user.userId === chat.contact);
        return Object.assign({}, chat, {
          contact,
        });
      });

    set(chats, userChats);
  },
});

export const selectedChat = selectorFamily({
  key: 'getSelectedChat',
  get: ({ get }) => {
    const chatList = get(chats);
    return chatList.find((chat) => chat.isSelected);
  },
  set: (id) => ({ set, get }) => {
    const chatList = get(chats);
    const newChatList = chatList.map((chat) => {
      const isSelectedChat = chat.id === id;
      return Object.assign({}, chat, {
        isSelected: isSelectedChat ? true : false,
      });
    });
    set(chats, newChatList);
  },
});

// export const getCurrentMessages = selector({
//   key: 'getMessages',
//   get: ({ get }) => {
//     const selectedChat = get(getSelectedChat);
//     return selectedChat.messages;
//   },
// });

// export const getChatsByCurrentUser = selector({
//   key: 'getChatsByCurrentUser',
//   get: ({ get }) => {
//     const currentUser = get(getUser);

//     return currentUser.chats;
//   },
// });
