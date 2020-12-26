import styled from "styled-components";
import tw from "tailwind.macro";

export const ModalContainer = styled.div`
  ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
`;

export const ModalBodyContainer = styled.div`
  ${tw`relative w-screen my-6 mx-auto max-w-sm`}
`;

export const ModalBody = styled.div`
  ${tw`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
`;

export const ModalHeader = styled.div`
  ${tw`flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t`}
`;

export const ModalTitle = styled.h3`
  ${tw`text-3xl font-semibold`}
`;

export const ModalCloseButton = styled.button`
  ${tw`p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none`}
`;

export const ModalCloseIcon = styled.span`
  ${tw`bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none`}
`;

export const ModalContent = styled.div`
  ${tw`relative p-6 flex-auto`}
`;

export const ModalFooterContainer = styled.div`
  ${tw`flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b`}
`;

export const ModalButtonSave = styled.button`
  ${tw`bg-blue-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
`;

export const ModalGrayout = styled.div`
  ${tw`opacity-25 fixed inset-0 z-40 bg-black`}
`;
