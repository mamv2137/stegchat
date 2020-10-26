import React from 'react'
import {ButtonContainer, ButtonLabel} from './ButtonNewChat.styles.tw'

const ButtonNewChat = ({
    text = '',
    onClick = () => null
}) => {
    return (
        <ButtonContainer onClick={onClick}>
            <div className="flex bg-blue-100 rounded-full w-12 h-12 items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <ButtonLabel className="">{text}</ButtonLabel>
        </ButtonContainer>
    )
}

export default ButtonNewChat