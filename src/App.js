import React, { useEffect } from 'react';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import './App.css';

import SideBar from './components/Sidebar';
import PanelChat from './components/PanelChat';

import {
  MainLayout,
  AppContainer,
  MainChatContainer,
  MainContent,
} from './MainLayout.styles';

import useDarkMode from './hooks/useDarkMode';

import PanelConfig from './components/PanelConfig';
import Chat from './components/Chat';

import { ChatProvider } from './contexts/Chat';
import { ModalProvider } from './components/Modal/context';
import { UserProvider } from './contexts/User';

import { user } from './store/User/atoms';
import { getChats } from './store/Chat/selectors';

function App() {
  const { state, contents } = useRecoilValueLoadable(user);
  const setUserChats = useSetRecoilState(getChats);

  useEffect(() => {
    if (state === 'hasValue') {
      setUserChats(contents.chats);
      // setUserContacts(contents.contacts);
    }
  }, [state]);

  const [enableDarkMode] = useDarkMode();

  return (
    <ModalProvider>
      <UserProvider>
        <ChatProvider>
          <MainLayout enableDarkMode={enableDarkMode}>
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
      </UserProvider>
    </ModalProvider>
  );
}

export default App;
