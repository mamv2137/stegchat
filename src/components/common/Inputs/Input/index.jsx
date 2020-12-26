import React from 'react'
import { InputContainer, Input as StyledInput, IconContainer } from './Input.styles.tw'

const Input = ({
    defaultValue,
    placeholder,
    type,
    name,
    onChange,
    icon: IconComponent,
}) => {
    return (
        <InputContainer>
            <StyledInput onChange={onChange} defaultValue={defaultValue} name={name} type={type} placeholder={placeholder} className="placeholder-gray-600" />
                <IconContainer>
                    <svg className="w-6 h-6 pr-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </IconContainer>
            {
                IconComponent && (<span>hola</span> //TODO: Change this 🤪
                )
            }
        </InputContainer>
    )
}

export default Input
