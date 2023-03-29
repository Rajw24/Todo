import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const submit = (event)=>{
        event.preventDefault();
        console.log("submit function data:", Title, Desc)
        if (!Title || !Desc) {
            alert("Title or Description cannot be empty!");
        }
        else{
            props.addTodo(Title, Desc);
            setDesc("");
            setTitle("");
        }
    }
  return (
    <>
    <div className="container py-2">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label">Title</label>
                <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="Title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Desc" className="form-label">Description</label>
                <input type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="Desc"/>
            </div>
            <button type="submit" className="btn btn-success btn-sm">Submit</button>
        </form>
    </div>
    </>
  )
}