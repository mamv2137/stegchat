import styled from "styled-components";
import tw from "twin.macro";

export const MainLayout = styled.div`
  ${tw`w-full h-screen p-10`}
`;

export const MainContent = styled.div`
  ${tw`flex flex-1`}
`;

export const AppContainer = styled.div.attrs({
  className: "bg-blue-1000",
})`
  ${tw`
    flex
    w-full 
    h-full 
    shadow-lg
    rounded-3xl 
    p-4`}
`;

export const MainChatContainer = styled.div`
  ${tw`
    flex
    flex-1 
    text-center 
    bg-gray-100 
    p-4 
    m-1 
    rounded-3xl
    `}
`;
