import { useState } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"



function App() {

  const tasks = useSelector(state => state.tasks)
  const [inputTask,setInputTask] =useState()
  const dispatch = useDispatch()


  const handleInput=(e)=>{
    setInputTask(e.target.value)
    
  }


  const handleSubmit=()=>{
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask
    })

  }

  const handleRemove =(task)=>{
    dispatch({
      type: 'REMOVE_TASK',
      payload: task
      
    })
  }

  return (
    <>
    <ul >
        {
          tasks.map (task => 
            <li key={task}>
              {task}
              <button onClick={()=>handleRemove(task)}>remover</button>
            </li>
            )
        }
    </ul>
    <input type="text" onChange={handleInput} value={inputTask}/>
    <button onClick={handleSubmit}>Inserir</button>
    </>
  )
}

export default App;
