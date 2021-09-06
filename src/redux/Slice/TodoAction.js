import {SwitchTheme,AddTodoElement,ChangeTodoStatus,RemoveItem,clearCompleted} from './TodoSlice';
export const changeTheme=(payload)=>async(dispatch)=>{
    dispatch(SwitchTheme(payload));
}
export const AddElementAction=(payload)=>async(dispatch)=>{
    dispatch(AddTodoElement(payload))
}
export const ChangeStatus=(payload)=>async(dispatch)=>{
    dispatch(ChangeTodoStatus(payload))
}
export const RemoveTodoItem=(payload)=>async(dispatch)=>{
    dispatch(RemoveItem(payload))
}
export const clearAll=(payload)=>async(dispatch)=>{
    dispatch(clearCompleted())
}