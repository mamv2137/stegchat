import React, { useState } from 'react'
import CreateNewChat from './ButtonNewChat' 
import Chats from './Chats'
import Contacts from './Contacts'

import { PanelChatContainer } from './PanelChat.styles.tw'

const PanelChat = () => {
    //TODO: May be all this must came from a context
    const [panel, setPanel] = useState(true)
    const panelSwitcher = () => {
        setPanel(!panel)
    }
    return (
        <PanelChatContainer>
            {
                panel ? (
                    <>
                        <CreateNewChat onClick={panelSwitcher} text="New Chat" />
                        <Chats />
                    </>
                ) : (
                    <>
                        <CreateNewChat text="Add Contact" />
                        <Contacts backAction={panelSwitcher} />
                    </>
                )
            }
        </PanelChatContainer>
    )
}

export default PanelChat