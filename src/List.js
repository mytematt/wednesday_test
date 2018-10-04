import React from 'react'
import Todo from './ToDo'

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => (
      <Todo 
      key={item.id}
      name={item.name} 
      id={item.id} />
      ))
      }
    </ul>
  </div>

)

export default List