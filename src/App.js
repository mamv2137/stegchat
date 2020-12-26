import React, { useState } from "react";
import "./App.css";

import SideBar from "./components/Sidebar";
import PanelChat from "./components/PanelChat";

import {
  MainLayout,
  AppContainer,
  MainChatContainer,
  MainContent,
} from "./MainLayout.styles";

import PanelConfig from "./components/PanelConfig";
import Chat from "./components/Chat";

import { ChatProvider } from "./contexts/Chat";
import { ModalProvider } from "./components/Modal/context";
import { UserProvider } from "./contexts/User";

function App() {
  const [enableDarkMode, setEnableDarkMode] = useState(false);

  return (
    <ModalProvider>
      <UserProvider>
        <ChatProvider>
          <MainLayout className={enableDarkMode && "dark"}>
            <AppContainer>
              <button
                className="dark:bg-white"
                onClick={() => setEnableDarkMode(!enableDarkMode)}
              >
                Hola
              </button>
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
      </UserProvider>
    </ModalProvider>
  );
}

export default App;
