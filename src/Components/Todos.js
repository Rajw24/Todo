import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
  console.log()
  return (
    <>
    <div className="container my-3">
    {props.TodoList.length!==0?<>
      <h3>Todo List</h3>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Mark as done</th>
          </tr>
          </thead>
          <tbody>
            {props.TodoList.map((todo)=>{
                return (
                  <TodoItem todo={todo} key={todo.sn} onDelete={props.onDelete}/>
                  )
                })}
          </tbody>
        </table></>:
        <h3 className='py-3'>
          "Hurray No tasks ToDO!"
        </h3>}
    </div>
    </>
  )
}
