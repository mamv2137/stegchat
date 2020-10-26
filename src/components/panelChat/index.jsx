import React, { useState } from 'react'
import CreateNewChat from './ButtonNewChat' 
import Chats from './Chats'
import Contacts from './Contacts'

import { PanelChatContainer } from './PanelChat.styles.tw'

const PanelChat = () => {
    // All this must came from a context
    const [panel, setPanel] = useState(false)
    const togglePanel = () => {
        setPanel(!panel)
    }
    return (
        <PanelChatContainer>
            <CreateNewChat onClick={togglePanel} text={panel ? 'New Chat' : 'Add Contact'}  />
            {
                panel ? <Chats /> : <Contacts />
            }
        </PanelChatContainer>
    )
}

export default PanelChat