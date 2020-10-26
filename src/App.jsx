import React from "react";
import "./index.css";

import SideBar from './components/Sidebar'
import PanelChat from './components/PanelChat'

import {MainLayout, AppContainer, ChatContainer, MainContent} from "./MainLayout.styles.tw";

import sc from 'stegcloak'
import Header from "./components/Chat/Header";
import ChatContent from "./components/Chat/Content";
import ChatTextBar from "./components/Chat/ChatTextBar";
import PanelConfig from "./components/PanelConfig";

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
        <MainContent>

          <ChatContainer>
            {/** menu chats */}
            <PanelChat />
            {/** Chat Container */}
            <div className="flex flex-col flex-1 bg-transparent rounded-3xl m-1 px-4">
              {/** Header Chat */}
              <Header />
              {/**Content Chat */}
              <ChatContent />
              {/**Text Bar Chat */}
              <ChatTextBar />
            </div>
          </ChatContainer>
          {/** Menu chat */}
          <PanelConfig />
        </MainContent>
      </AppContainer>
    </MainLayout>
  );
};

export default App;
