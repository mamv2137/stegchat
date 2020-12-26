import styled from "styled-components";
import tw from "twin.macro";

export const ItemContainer = styled.div`
  ${tw`
        flex p-2 cursor-pointer
        rounded-md
    `}
  ${({ isSelected }) =>
    isSelected
      ? tw`bg-blue-100 shadow-inner font-semibold`
      : tw`hover:shadow-md`}
`;
