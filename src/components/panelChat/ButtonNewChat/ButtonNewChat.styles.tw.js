import styled from "styled-components";
import tw from "tailwind.macro";

export const ButtonContainer = styled.div`
    ${tw`
        flex h-auto p-2 bg-white rounded-3xl shadow-lg justify-between items-center cursor-pointer
    `}
`
export const ButtonLabel = styled.span`
    ${tw`
        font-medium flex-1
    `}
`