import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {clearAll} from '../redux/Slice/TodoAction'
export const SecondaryFilter=()=>{
    const todo = useSelector(state =>state.TodoStore.todo)
    const theme=useSelector(state=>state.TodoStore.theme)
    const dispatch = useDispatch()
    let Style=theme==="dark"?
    "text-xs text-DARKdarkgrayblue hover:text-DARKlightgraybluehover  font-semibold tracking-wider"
    :
    "text-xs text-DARKdarkgrayblue hover:text-DARKverydarksaturatedblue  font-semibold tracking-wider";
    return(
        <div className="block sm:hidden overflow-hidden px-4 shadow-md flex justify-between items-center  h-14 max-w-md bg-lightgray dark:bg-DARKverydarksaturatedblue">
        <div className=" text-xs text-DARKdarkgrayblue font-semibold tracking-wider">
            {todo.length} items
        </div>
        
    <div  className={Style} onClick={()=>dispatch(clearAll())}>
        Clear Completed
    </div>
    </div>
    );
}
export default function Filter({active,completed,All}) {
    const [index,setIndex] =useState(1);
    const theme=useSelector(state=>state.TodoStore.theme)
    const todo = useSelector(state =>state.TodoStore.todo)
    const dispatch = useDispatch()
    let activeStyle="text-sm text-brightblue font-semibold tracking-wider";
    let Style=theme==="dark"?
    "text-xs text-DARKdarkgrayblue hover:text-DARKlightgraybluehover  font-semibold tracking-wider"
    :
    "text-xs text-DARKdarkgrayblue hover:text-DARKverydarksaturatedblue  font-semibold tracking-wider";
    return (
        <div className="rounded-md shadow-md flex justify-around items-center  h-14 max-w-md bg-lightgray dark:bg-DARKverydarksaturatedblue">
            <div className="hidden sm:block text-xs text-DARKdarkgrayblue font-semibold tracking-wider">
                {todo.length} items
            </div>
            <div className=" flex space-x-4 justify-center items-center h-full">
            <p className={index===1?activeStyle:Style} onClick={()=>{
                setIndex(1);
                All();
                }}>All</p>
            <p className={index===2?activeStyle:Style} onClick={()=>{
                setIndex(2);
                active();
            }}>Active</p>
            <p className={index===3?activeStyle:Style} onClick={()=>{
                setIndex(3);
                completed();}}>Completed</p>
        </div>
        <div  className={"hidden sm:block "+Style}  onClick={()=>dispatch(clearAll())}>
            Clear Completed
        </div>
        </div>
        
    )
}
