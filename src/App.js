import './App.css';
import { Header } from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { useState, useEffect} from 'react';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("TodoList") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("TodoList"));
  }
  const onDelete = (todo) =>{
    setTodos(TodoList.filter((e)=>{
      return e!==todo
    }))
  }
  const addTodo = (Title, Desc) =>{
    console.log("I am Adding", Title, Desc)
    let sn;
    if (TodoList.length === 0) {
      sn = 1
    } else {
      sn = TodoList[TodoList.length-1].sn +1
    }
    const myTodo = {
      sn: sn,
      title: Title,
      desc: Desc
    }
    setTodos([...TodoList, myTodo])
    console.log(myTodo)
  }
  const [TodoList, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
  }, [TodoList])
  
  return (
    <>
    <Router>

      <Header title="Todos" showSearchBox={false}/>
      <Routes>
        <Route exact path='/' element={
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos TodoList={TodoList} onDelete={onDelete}/>
          </>    
        }/>
        <Route exact path='/about' element={<About/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;