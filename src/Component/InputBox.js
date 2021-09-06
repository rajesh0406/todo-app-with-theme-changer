import React,{useRef,useEffect} from 'react'
import { AddElementAction } from '../redux/Slice/TodoAction';
import { useDispatch } from 'react-redux';
export default function InputBox() {
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    useEffect(() => {
        inputRef.current.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                const data={
                    id:Math.floor((Math.random() * 100000) + 1),
                    status:false,
                    todo:inputRef.current.value
                }
             dispatch(AddElementAction(data))
              inputRef.current.value = null;
            }
          });
        return () => {
            
        }
    }, [])
    return (
        <div className="bg-lightgray dark:bg-DARKverydarksaturatedblue shadow-md h-14 rounded-md flex flex-row items-center">
            <div className="rounded-full p-4 mx-4 border-2 border-lightgrayblue dark:border-DARKverydarkgrayishblue2">
            </div>
            <input 
            className="mx-4 w-full h-full bg-lightgray dark:bg-DARKverydarksaturatedblue text-verydarkgrayblue dark:text-lightgrayblue"
            ref={inputRef}
            placeholder="Add a Todo"
            >
                
            </input>
        </div>
    )
}
