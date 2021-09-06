import React from 'react'
import MoonIcon from '../images/icon-moon.svg';
import SunIcon from '../images/icon-sun.svg';
import {changeTheme} from '../redux/Slice/TodoAction';
import {useDispatch} from 'react-redux'
export default function ToggleButton({theme}) {
    const dispatch = useDispatch()
    const handleChange=()=>{
        theme==="dark"?dispatch(changeTheme(0)):dispatch(changeTheme(1))
    }
    return (
        <div>
            {
                theme==="dark"?
                <img src={SunIcon} alt="Moon icon" onClick={()=>handleChange()}/>
                :
                <img src={MoonIcon} alt="Sun icon" onClick={()=>handleChange()}/>
            }
        </div>
    )
}
