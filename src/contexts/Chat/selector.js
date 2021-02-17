import { useContextChat } from '.';
import useSelector from '../../hooks/useSelector';

const Selector = () => {
  const [chatState, _] = useContextChat();

  const getSelectedChat =
    useSelector(chatState, () =>
      chatState.chats.find((chat) => chat.isSelected)
    ) || {};

  const getMessagesFromSelectedChat =
    useSelector(chatState, () => getSelectedChat.messages) || [];

  return {
    getSelectedChat,
    getMessagesFromSelectedChat,
  };
};

export default Selector;
