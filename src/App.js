
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './App.css'
import Header from './Component/Header';
function App() {
  const dispatch = useDispatch();
  const MyTheme = useSelector(state => state.TodoStore.theme)
  const TodoList = useSelector(state => state.TodoStore.todo)
  console.log(MyTheme)
  return (
    <div className={MyTheme}>
      <div className="transition-all duration-700 ease-in-out bg-verylightgrayblue dark:bg-DARKverydarkblue w-screen h-screen">
       <Header/>
      </div>
    </div>
      
  );
}
 
export default App;
