import styled from "styled-components";
import tw from "tailwind.macro";

export const MainLayout = styled.div`
  ${tw`w-full h-screen p-10`}
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