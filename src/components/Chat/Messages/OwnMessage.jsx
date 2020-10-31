import React from 'react'
import moment from 'moment'

import { MessageContainer, OwnMessageContainer, AvatarMessage, BubbleOwnHiddenMessage, BubbleOwnMessage, TextMessage, TextTimeMessage } from './Messages.styles.tw'

const OwnMessage = ({
    message,
    showHiddenMessage = false
}) => {
    return (
        <MessageContainer>
            <OwnMessageContainer>
                <AvatarMessage src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile"/>
                <BubbleOwnMessage showHiddenMessage={showHiddenMessage}>
                    <TextMessage>
                        {message.text}
                    </TextMessage>
                    <TextTimeMessage>{moment(message.time).fromNow()}</TextTimeMessage>
                </BubbleOwnMessage>
            </OwnMessageContainer>
            {
                showHiddenMessage && message.hiddenText && (
                    <OwnMessageContainer>
                        <BubbleOwnHiddenMessage>
                            <TextMessage>
                                {message.hiddenText}
                            </TextMessage>
                        </BubbleOwnHiddenMessage>
                    </OwnMessageContainer>
                )
            }
        </MessageContainer>
    )
}

export default OwnMessage
