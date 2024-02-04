'use client'

import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [textOpen , setTextOpen] = useState(false);
    const [task,setTask] = useState('');

    const handleAddTask = () => {
        axios.post('http://localhost:3000/add', {task:task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <div className='flex justify-center'>
        <div className='border border-blue-950 rounded-2xl lg:w-[450px]'>
            <form action="" >
            <div className='mt-10 ml-8'>
                <div><label htmlFor="Title">Title</label></div>
                <div className='mt-5'><input type="text" placeholder='Title' onClick={() =>setTextOpen(true)} onChange={(e) => setTask(e.target.value)}/></div>
            </div>
            {textOpen && (
            <div className='mt-8 ml-8'>
                <div><label htmlFor="Body">Body</label></div>
                <div className='mt-5'><textarea name="Body" placeholder='Task Details' ></textarea></div>
            </div>
            )}
            <div className='flex mt-8 justify-center mb-8'>
                <div className='bg-red-500 w-24 h-12 rounded-full flex justify-center items-center  text-white font-bold'>
                    <button onClick={handleAddTask}>Add</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Form