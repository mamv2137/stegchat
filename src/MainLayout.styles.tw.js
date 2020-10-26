import styled from "styled-components";
import tw from "tailwind.macro";

export const MainLayout = styled.div`
  ${tw`w-full h-screen p-10`}
`

export const MainContent = styled.div`
  ${tw`flex`}
`

export const AppContainer = styled.div`
  ${tw`
    flex
    w-full 
    h-full 
    bg-blue-1000
    shadow-lg
    rounded-3xl 
    p-4`
  }
`

export const ChatContainer = styled.div`
  ${tw`
    flex
    flex-1 
    text-center 
    bg-gray-100 
    p-4 
    m-1 
    rounded-3xl
    `
  }
`