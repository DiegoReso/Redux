import { createStore } from "redux"

const INITIAL_STATE ={
  tasks:[
    'Estudar React.js'
  ]
}

function todo(state = INITIAL_STATE,action){
  switch(action.type){
    case'ADD_TASK':
      return{
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }




      default:
        return state
  }
}



const store = createStore(todo)


export default store