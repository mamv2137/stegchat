import styled from "styled-components";
import tw from "tailwind.macro";

export const MessageContainer = styled.div`
  ${tw`flex flex-col my-1`}
`

export const OwnMessageContainer = styled.div`
  ${tw`flex flex-row-reverse`}
`

export const OtherMessageContainer = styled.div`
  ${tw`flex`}
`

export const BubbleOwnMessage = styled.div.attrs({
  className: 'justify-self-start'
})`
  ${tw`flex flex-col rounded-l-3xl mr-2 shadow-lg h-auto w-1/2 bg-white p-4 items-end text-right`}
  ${({showHiddenMessage}) => !showHiddenMessage && tw`rounded-b-3xl` }
`

export const BubbleOtherMessage = styled.div.attrs({
  className: 'justify-self-start'
})`
  ${tw`flex flex-col ml-2 font-semibold rounded-r-3xl h-auto w-1/2 bg-pink-150 p-4 text-left`}
  ${({showHiddenMessage}) => !showHiddenMessage && tw`rounded-b-3xl` }
`

export const BubbleOwnHiddenMessage = styled.div`
  ${tw`shadow-inner rounded-l-3xl mr-8 rounded-b-3xl h-auto w-1/2 bg-gray-300 p-4 items-end text-right`}
`

export const BubbleOtherHiddenMessage = styled.div.attrs({
  className: 'justify-self-start'
})`
  ${tw`shadow-inner flex flex-col font-semibold ml-8 rounded-r-3xl rounded-b-3xl h-auto w-1/2 bg-pink-500 p-4 text-left`}
`

export const TextMessage = styled.span`
  ${tw`flex font-semibold`}
`

export const TextOtherMessage = styled(TextMessage)`
  ${tw`text-white`}
`

export const TextTimeMessage = styled.span`
  ${tw`text-xs font-medium mt-1 text-gray-500`}
`

export const TextTimeOtherMessage = styled(TextTimeMessage)`
  ${tw`text-gray-100`}
`

export const AvatarMessage = styled.img`
  ${tw`inline-block object-cover w-6 h-6 rounded-full`}
` 