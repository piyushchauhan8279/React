import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
  todos:[{id:123,task:"coding",isDone:false}]
}

export const todoSlice=createSlice({
  name:"Todo",
  initialState,
  reducers:{
    addTodo:(state,action)=>{

      const newTodo={
        id:nanoid(),
        task:action.payload,
        isDone:false
      }

      state.todos.push(newTodo);

    },
    deleteTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=> todo.id!==action.payload)
    },
    markAsDone: (state, action) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload) {
      return { ...todo, isDone: !todo.isDone };  // return updated todo
    }
    return todo; // return unchanged todo
  });
}

  }
  
})

export default todoSlice.reducer;

export const {addTodo,deleteTodo,markAsDone} =todoSlice.actions;