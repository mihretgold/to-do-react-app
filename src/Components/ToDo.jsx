import { useState } from 'react';
import './CSS/ToDo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItem from './TodoItem';

let count = 0
const ToDo = () => {
  const add = () => {
    setTodo([...todo, {no:count++ ,task:inputRef.current.value, display:''}]);
    inputRef.current.value = "";
    localStorage.setItem('todos_count', count);
  }
  const [todo, setTodo] = useState([])
  const inputRef = useRef(null)
  
  //Create New use effect to fetch local storage when page is refreshed
  useEffect(()=>{
    const data = localStorage.getItem('todo');
    if(data){
      setTodo(JSON.parse(data));
      count = localStorage.getItem('todos_count');
    }
  }, [])

  useEffect(()=>{
    //so that the above fetch useEffect is called and fetched before setItem
    setTimeout(() => {
      console.log(todo);
      //create local storage
      localStorage.setItem('todo', JSON.stringify(todo));
    }, 100);
  }, [todo])

  return (
    <div className="to-do">
            <div className="to-do-header">To Do List</div>
            <div className="to-do-add">
                <input ref={inputRef} type="text" className='to-do-input' placeholder='Add your Task' />
                <div onClick={()=>{add()}} className="add-task">ADD</div>   
            </div>
            <div className="to-do-list">
                {todo.map((item, index)=>{
                    return <TodoItem key={index} no = {item.no} task = {item.task}  setTodo = {setTodo}  display= {item.display} />
                })}
                
            </div>
    </div>
  )
}

export default ToDo;
