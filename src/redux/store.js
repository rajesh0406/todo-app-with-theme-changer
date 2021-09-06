import { configureStore } from '@reduxjs/toolkit'
import TodoStore from './Slice/TodoSlice';
export default configureStore({
  reducer: {
      TodoStore:TodoStore
  }
})