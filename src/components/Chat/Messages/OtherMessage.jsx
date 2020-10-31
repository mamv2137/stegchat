import React from 'react'
import moment from 'moment'

import { MessageContainer, OtherMessageContainer, AvatarMessage, BubbleOtherHiddenMessage, BubbleOtherMessage, TextOtherMessage, TextTimeOtherMessage } from './Messages.styles.tw'

const OtherMessage = ({
    message,
    showHiddenMessage = false
}) => {
    return (
        <MessageContainer>
            <OtherMessageContainer>
                <AvatarMessage src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <BubbleOtherMessage showHiddenMessage={showHiddenMessage}>
                    <TextOtherMessage>
                        {message.text}
                    </TextOtherMessage>
                    <TextTimeOtherMessage className="">{moment(message.time).fromNow()}</TextTimeOtherMessage>
                </BubbleOtherMessage>
            </OtherMessageContainer>
            {
                showHiddenMessage && message.hiddenText && (
                    <BubbleOtherHiddenMessage>
                        <TextOtherMessage>
                            {message.hiddenText}
                        </TextOtherMessage>
                    </BubbleOtherHiddenMessage>
                )
            }
        </MessageContainer>
    )
}

export default OtherMessage
