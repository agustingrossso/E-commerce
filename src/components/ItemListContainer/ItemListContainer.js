

import React from 'react'
import "./styles.css";

const ItemListContainer = (props) => {
    console.log(props)
  return (
    <div className='message-greeting-container'>
        <h2 className='message'>{props.name}</h2>
        <h3 className='sub-message'>{props.sub}</h3>
        
    </div>
  )
}

export default ItemListContainer
