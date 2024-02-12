'use client'

import React, { useState } from 'react'
import axios from 'axios';
import Image from 'next/image';

const Form: React.FC = () => {
    const [textOpen , setTextOpen] = useState(false);
    const [task,setTask] = useState('');
    const [description, setDescription] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccess, setShowSucess] = useState(false);
    const [confirmAction , setConfirmAction] = useState(false);

    const handlePopupMessage = () => {
        setShowPopup(true);
        setConfirmAction(false);
    }

    const handleAddTask = () => {
        axios.post('http://localhost:3000/add', {task:task, description:description})
        .then(result => {
            setShowSucess(true);
            setTimeout(() => {
                setShowSucess(false);
                window.location.reload();
            }, 2000);
        })
        .catch(err => console.log(err))
    }

    const handleHidePopup = () => {
        setTask('')
        setDescription('')
        setShowPopup(false)
        window.location.reload();
    }

    const handleConfirmTask = () => {
        setConfirmAction(true);
        handleAddTask();
        setShowPopup(false);
    }

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); 
        handlePopupMessage();
    }

  return (
    <div>
        <div className='flex justify-center'>
        <div className='border border-blue-950 rounded-2xl lg:w-[450px]'>
            <form action="">
            <div className='mt-10 ml-8'>
                <div><label htmlFor="Title">Title</label></div>
                <div className='mt-5'><input type="text" className='bg-red-100' placeholder='Title' onClick={() =>setTextOpen(true)} onChange={(e) => setTask(e.target.value)}/></div>
            </div>
            {textOpen && (
            <div className='mt-8 ml-8'>
                <div><label htmlFor="Body">Body</label></div>
                <div className='mt-5'><textarea name="Body" className='bg-red-100' placeholder='Task Details' onChange={(e) => setDescription(e.target.value)}></textarea></div>
            </div>
            )}
            <div className='flex mt-8 justify-center mb-8'>
                <div className='bg-red-500 w-24 h-12 rounded-full flex justify-center items-center  text-white font-bold'>
                    <button onClick={handleFormSubmit}>Add</button>
                </div>
            </div>
            </form>
        </div>
        </div>

        {showPopup && (
            <div className='flex justify-center items-center mt-[-150px]'>
                <div className='w-[350px] h-[200px] border border-black bg-white rounded-2xl'>

                    <div className='mt-16'>
                        <div className='justify-center items-center flex'>
                            <p>Are your Sure to Submit Task?</p>
                        </div>
                        <div className='flex justify-center space-x-8 mt-8'>
                            <button className='bg-green-200 text-white w-16 h-10 rounded-xl' onClick={handleConfirmTask}>Yes</button>
                            <button className='bg-red-700 text-white w-16 h-10 rounded-xl' onClick={handleHidePopup}>No</button>
                        </div>
                        </div>
                    </div>
                </div>
            )}

                    {confirmAction && showSuccess && (
                        <div className='flex justify-center items-center mt-[-150px]'>
                        <div className='w-[300px] h-[160px] border border-black bg-white rounded-2xl'>
                        <div className='flex justify-center items-center mt-[20px] success-gif'>
                            <Image src={'/success.gif'} alt='success' width={150} height={150}/>
                        </div>
                    </div>
                    </div>
                    )}

                    </div>
  )
}

export default Form