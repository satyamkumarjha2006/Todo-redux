import React, { useState } from 'react';
import { addTodo } from '../Features/todoSlice';
import {useDispatch} from 'react-redux'

function AddTodo() {
    const [input , setInput] = useState("")

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('') 
    }



    return ( 
          <form  onSubmit = {addTodoHandler} className="flex items-center justify-center gap-2 bg-slate-500 border border-white/10 mt-8 rounded-xl p-3 ml-4 mr-4">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-300 mt-2 py-3 px-3 rounded-l-lg bg-gray-400 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg mt-2 py-3 px-3 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
     );
}

export default AddTodo;