import React from 'react'
import { TitleContainer, TitleContent } from './Title.styles.tw' 
    
const Title = ({text, children}) => {
    return (
      <TitleContainer>
        {children}
        <TitleContent>{text}</TitleContent>
      </TitleContainer>
    )
}

export default Title
