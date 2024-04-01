import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'
import './CSS/TodoItem.css'


const TodoItem = ({no, task, display, setTodo}) => {
  const deleteData = (no) => {
    let data = JSON.parse(localStorage.getItem('todo'));
    if(data !== null){
      data = data.filter((todo) => todo.no !== no);
      setTodo(data);
    }
  }

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem('todo'));
    if(data !== null){
      for(let i = 0; i< data.length; i++) {
        if(data[i].no === no){
          if(data[i].display === ''){
            data[i].display = 'line-through';
          }else{
            data[i].display = '';
          }
          break;
        }
      
      }

      setTodo(data);
    }
  }
  return (
     <div className='todo-items'>
        <div className="todo-marks" onClick={()=> {toggle(no)}}>
          {display === '' ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
            <div className={`todo-items-text ${display} `}>{task}</div>
        </div>
        <img className='todo-items-cross' onClick={() => {deleteData(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItem;
