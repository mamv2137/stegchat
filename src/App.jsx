import React from "react";
import "./index.css";

import SideBar from './components/Sidebar'
import PanelChat from './components/PanelChat'

import {MainLayout, AppContainer, MainChatContainer, MainContent} from "./MainLayout.styles.tw";

import sc from 'stegcloak'

import PanelConfig from "./components/PanelConfig";
import Chat from "./components/Chat";
import { ChatProvider } from "./contexts/Chat";

const App = () => {
  const stegcloak = new sc(true, false)
  const magic = stegcloak.hide("Voldemort is back", "mischief managed", "The WiFi's not working here!");
  console.log(magic)
  const secret = stegcloak.reveal(magic, "mischief managed");
  console.log(secret);
  return (
    <ChatProvider>
      <MainLayout>
        <AppContainer>
          <SideBar />
          <MainContent>
            <MainChatContainer>
              <PanelChat />
              <Chat />
            </MainChatContainer>
            <PanelConfig />
          </MainContent>
        </AppContainer>
      </MainLayout>
    </ChatProvider>
  );
};

export default App;
