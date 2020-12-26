import React from 'react'
import { ItemContainer } from './ItemList.styles.tw'

function ItemList({ item, onSelectItem = () => null }) {
    return (
        <ItemContainer isSelected={item.isSelected} onClick={() => onSelectItem(item.chatId)}>
            <div className="relative inline-block">
                <img className="inline-block object-cover w-12 h-12 rounded-full" src={item.avatar} alt="Avatar" />
                <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col ml-2">
                <span className="text-normal text-gray-700">{item.name}</span>
                <span className="text-sm text-left text-gray-500">{item.status}</span>
            </div>
        </ItemContainer>
    )
}

export default ItemList
