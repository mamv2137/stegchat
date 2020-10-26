import React from 'react'
import { ItemContainer } from './ItemList.styles.tw'

function ItemList({ item }) {
    return (
        <ItemContainer isSelected={item.isSelected}>
            <div className="relative inline-block">
                <img className="inline-block object-cover w-12 h-12 rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col ml-2">
                <span className="text-normal text-gray-700">{item.name}</span>
                <span className="text-sm text-left text-gray-500">{item.time}</span>
            </div>
        </ItemContainer>
    )
}

export default ItemList
