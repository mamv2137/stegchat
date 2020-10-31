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
            <CreateNewChat onClick={panelSwitcher} text={panel ? 'New Chat' : 'Add Contact'}  />
            {
                panel ? <Chats /> : <Contacts backAction={panelSwitcher} />
            }
        </PanelChatContainer>
    )
}

export default PanelChat