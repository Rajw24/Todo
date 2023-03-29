import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <tr>
      <th scope="row">{todo.sn}</th>
      <td>{todo.title}</td>
      <td>{todo.desc}</td>
      <td><button className="btn btn-success btn-sm" title='Delete' onClick={()=>{onDelete(todo)}}>
    <i className="fa-solid fa-check"></i>
    </button></td>
    </tr>
    </>
  )
}
