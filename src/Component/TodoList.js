import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';
import {SecondaryFilter} from './Filter';
import {ChangeStatus,RemoveTodoItem} from '../redux/Slice/TodoAction';
const TodoTile=({item,theme,dispatch})=>{
    const unchecked="rounded-full p-4 border-2 border-lightgrayblue dark:border-DARKverydarkgrayishblue2"
    const checked="rounded-full p-3 bg-gradient-to-r from-skyblue to-purple text-verylightgrayblue"
    let Style=theme==="dark"?
    "text-xs text-DARKdarkgrayblue hover:text-DARKlightgraybluehover  font-semibold tracking-wider w-full px-4"
    :
    "text-xs text-DARKdarkgrayblue hover:text-DARKverydarksaturatedblue  font-semibold tracking-wider w-full px-4";
    let strike=" line-through"
    return(
        <div key={item.id} className="flex justify-between px-4 items-center  h-14 max-w-md bg-lightgray dark:bg-DARKverydarksaturatedblue border-b-2 dark:border-DARKverydarkgrayishblue1 border-lightgrayblue">
            <div className={item.status?checked:unchecked} onClick={()=>{dispatch(ChangeStatus(item.id))}}>
                {
                    item.status?
                    <img src={check} alt="check image" className=""/>
                    :
                    <></>
                }
                
            </div>
            <div className={item.status?Style+strike:Style}>
                {item.todo}
            </div>
            <div className="" onClick={()=>{dispatch(RemoveTodoItem(item.id))}}>
                <img src={cross} alt="cross image"/>
            </div>
        </div>
    );
}
export default function TodoList({todo}) {
    const dispatch = useDispatch();
    const theme=useSelector(state => state.TodoStore.theme);
   
    return (
        <div className="flex flex-col rounded-md overflow-hidden mb-4">
            {
                todo.map((item,index)=>{
                       return <TodoTile key={index} item={item} theme={theme} dispatch={dispatch}/>
                })
            }
            <SecondaryFilter/>
        </div>
    )
}
