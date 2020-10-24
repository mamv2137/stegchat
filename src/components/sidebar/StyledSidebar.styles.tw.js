import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledSideBarContainer = styled.div`
    ${tw`flex-initial flex flex-col justify-between text-gray-700 text-center bg-transparent px-4 py-2 m-2`}
`

export const StyledSideBarLogo = styled.div`
    ${tw`self-start`}
`

export const StyledSideBarContainerMenu = styled.div`
    ${tw`flex flex-col justify-center flex-1`}
`

export const StyledSideBarMenuItems = styled.a`
    ${tw`py-6 w-6 h-6`}
`