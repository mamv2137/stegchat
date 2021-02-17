import { atom } from 'recoil';

export const chats = atom({
  key: 'chats',
  default: [],
});

export const messages = atom({
  key: 'messages',
  default: [],
});

export const showHiddenMessages = atom({
  key: 'showHiddenMessages',
  default: false,
});

export const loadingMessages = atom({
  key: 'loadingMessages',
  default: false,
});

export const loadingHiddenMessages = atom({
  key: 'loadingHiddenMessages',
  default: false,
});
