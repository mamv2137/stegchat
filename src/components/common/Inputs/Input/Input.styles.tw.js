import styled from "styled-components";
import tw from "twin.macro";

export const InputContainer = styled.div`
  ${tw`relative flex w-full flex-wrap items-stretch mb-3`}
`;

export const Input = styled.input.attrs({
  className: "focus:shadow-outline",
})`
  ${tw`px-3 py-3  text-gray-800 relative  bg-blue-100 rounded-3xl text-sm outline-none focus:outline-none w-full pr-10`}
`;

export const IconContainer = tw.span`z-10 h-full leading-snug font-normal text-center text-gray-600 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3`;
