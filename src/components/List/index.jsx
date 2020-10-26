import React from 'react'
import ItemList from './ItemList'

import { ListContainer } from './List.styles.tw'

function List({ items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            const newItem = index === 1 ? Object.assign({}, item, { isSelected: true }) : item
            return <ItemList key={item.id} item={newItem} />
        })
    }
    return (
        <ListContainer className="divide-y divide-gray-200" id="chat-scroll">
            {renderItems()}
        </ListContainer>
    )
}

export default List
