import React,{useState,useEffect} from 'react'
import DesktopDark from '../images/bg-desktop-dark.jpg';
import DesktopLight from '../images/bg-desktop-light.jpg';
import { useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';
import InputBox from './InputBox';
import Filter from './Filter';
import TodoList from './TodoList';
function Header() {
    const theme = useSelector(state =>state.TodoStore.theme);
    const t=useSelector(state => state.TodoStore.todo);
    const [list,setList]=useState([])
    useEffect(() => {
        setList(t)
    }, [t])
    const completed=()=>{
        let arr=t.filter(item=>item.status===true)
        setList(arr)
    }
    const active=()=>{
        let arr=t.filter(item=>item.status===false)
        setList(arr)
    }
    const All=()=>{
        setList(t)
    }


    
    
    
    return (
        <div className="relative t-0 l-0 r-0 h-72 flex flex-col justify-center items-center">
            <img src={theme ==="dark"?DesktopDark:DesktopLight} className="w-full object-cover h-full" alt="header image"/>
            <div className="absolute top-20 flex flex-row justify-between items-center w-10/12 max-w-md">
                <h2 className="uppercase text-3xl text-lightgray font-bold tracking-widest">todo</h2>
                <ToggleButton theme={theme}/>
            </div>
            <div className="absolute top-40 w-10/12 max-w-md">
                <InputBox/>
            </div>
            <div className="absolute top-60 w-10/12 max-w-md">
                <TodoList todo={list} />
                <Filter active={()=>active()} completed={()=>completed()} All={()=>All()}/>
            </div>
        </div>
    )
}

export default Header;