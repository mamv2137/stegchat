import React from 'react'
import { useContextChat } from '../../contexts/Chat'
import { selectChat } from '../../contexts/Chat/actions'
import ItemList from './ItemList'

import { ListContainer } from './List.styles.tw'

import noChats from './noChats.svg'

function List({ items = [] }) {
    const [chatState, chatDispatch] = useContextChat()
    const onSelectItem = (id) => {
        chatDispatch(selectChat(id))
    }
    const renderItems = () => {
        return items.map(item => {
            return <ItemList key={item.chatId} item={item} onSelectItem={onSelectItem} />
        })
    }
    return (
        <ListContainer className="divide-y divide-gray-200 h-full" id="chat-scroll">
            {
                items.length > 0 ? renderItems() : (
                    <div className="flex flex-1 justify-center items-center">
                        <img src={noChats} alt="No Chats Founds" />
                    </div>
                )
            }
        </ListContainer>
    )
}

export default List
