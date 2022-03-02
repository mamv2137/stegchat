import { getWeb3ReactContext } from "@web3-react/core";
import { v4 as uuidv4 } from "uuid";
import create from "zustand";

const dummyChatList = [
  {
    id: uuidv4(),
    name: "Juansito Perez",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    state: "typing...",
    isNew: false,
    messages: [
      {
        id: uuidv4(),
        sender: "0xf859CB539EDe394DA3892C3B79794cb565682d45",
        text: "Que lo que manao",
        createdAt: Date.now(),
      },
      {
        id: uuidv4(),
        sender: "0xF48F47CA733BA9a31848362b4106BC9E2f67adE8",
        text: "Hablame bicho",
        createdAt: Date.now(),
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Maria Juana",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    state: "idle",
    isNew: true,
    messages: []
  },
];

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  signature: "",
  setSignature: (data: string) => {
    localStorage.setItem("sign", data);
    return set({ signature: data });
  },
  login: () => {
    const contexxt = getWeb3ReactContext();
    console.log(contexxt)
  },
  logout: () => {

  } 
}));

const useChatStore = create((set, get) => ({
  chats: dummyChatList,
  selectedChat: null,
  setSelectedChat: (chat) => set({ selectedChat: chat }),
}));

export {
    useAuthStore,
    useChatStore
}