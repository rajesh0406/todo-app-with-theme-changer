import { createSlice } from '@reduxjs/toolkit';
const initialState={
    theme:"dark",
    todo:[]
}
export const TodoListSlice = createSlice({
    name: 'TodoList',
    initialState,
    reducers: {
        AddTodoElement:(state,action)=>{
            state.todo=[...state.todo,action.payload]
            console.log("add",state.todo)
        },
        SwitchTheme:(state,action)=>{
            if(action.payload)
            {
                state.theme="dark";
            }
            else
            {
                state.theme="light"
            }

        },
        ChangeTodoStatus:(state,action)=>{
             const elementsIndex = state.todo.findIndex(element => element.id == action.payload )
             let newArray = [...state.todo]
            newArray[elementsIndex] = {...newArray[elementsIndex], status: !newArray[elementsIndex].status}
            state.todo=newArray
            console.log("change")
        },
        RemoveItem:(state,action)=>{
            const newArray=state.todo.filter(obj=>obj.id!==action.payload)
            state.todo=newArray
        },
        clearCompleted:(state,action)=>{
            const newArray=state.todo.filter(obj=>obj.status!==true)
            state.todo=newArray

        }
    }
});
export const {AddTodoElement,SwitchTheme,ChangeTodoStatus,RemoveItem,clearCompleted}=TodoListSlice.actions;
export default TodoListSlice.reducer;