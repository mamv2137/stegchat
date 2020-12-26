import React from 'react';
import './index.css';

import SideBar from './components/Sidebar';
import PanelChat from './components/PanelChat';

import {
  MainLayout,
  AppContainer,
  MainChatContainer,
  MainContent,
} from './MainLayout.styles.tw';

import PanelConfig from './components/PanelConfig';
import Chat from './components/Chat';

import { ChatProvider } from './contexts/Chat';
import { ModalProvider } from './components/Modal/context';
import { UserProvider } from './contexts/User';

const App = () => {
  return (
    <ModalProvider>
      <UserProvider>
        <ChatProvider>
          <MainLayout>
            <AppContainer>
              <button>Hola</button>
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
};

export default App;
