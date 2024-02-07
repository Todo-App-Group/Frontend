'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { FaRegEdit } from "react-icons/fa";

interface Todo {
  _id: string;
  task: string;
  description: string;
  done: boolean;
  editMode?: boolean;
}

const DisplayTable = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get<Todo[]>('http://localhost:3000/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEditClickIcon = (id : string ) => {
    axios.put<Todo[]>('http://localhost:3000/update/' + id)
      .then(result => {
        setTodos(prevTodos => prevTodos.map(todo => {
          if (todo._id === id) {
            return { ...todo, done: !todo.done }; 
          }
          return todo;
        }));
      })
      .catch(err => console.log(err));
  }

  const handleEdit = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo._id === id) {
        return { ...todo, editMode: true }; 
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleSave = (id: string) => {
    const todoToUpdate = todos.find(todo => todo._id === id);
    
    axios.put(`http://localhost:3000/update/${id}`, todoToUpdate)
      .then(response => {
        const updatedTodos = todos.map(todo => {
          if (todo._id === id) {
            return { ...todo, editMode: false }; 
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: string) => {
    const newTodos = todos.map(todo => {
      if (todo._id === id) {
        return { ...todo, [field]: event.target.value }; 
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleDelete = (id:string) => {
      axios.delete('http://localhost:3000/delete/' + id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='flex justify-center'>
      <div className='border border-black w-[500px]'>
        <div>
          {todos.length === 0
            ? <div><h2>No Record</h2></div>
            : todos.map(todo => (
              <div key={todo._id}>
                <div className='bg-red-400 border border-white text-white h-auto lg:w-[500px]'>
                  <div className='flex justify-between items-center'>
                    <div className='checkbox' onClick={() => handleEditClickIcon(todo._id)}>
                      {todo.done ? 
                        <BsFillCheckCircleFill className='icon w-14 h-5'></BsFillCheckCircleFill>
                      : 
                        <BsCircleFill className='icon w-14 h-5'/>
                      }
                    </div>
                    <div className='text-lg'>
                      {todo.editMode ? (
                        <div>
                          <input type="text" value={todo.task} onChange={(event) => handleInputChange(event, todo._id, 'task')} className='text-black' />
                          <input type="text" value={todo.description} onChange={(event) => handleInputChange(event, todo._id, 'description')} className='text-black' />
                          <button onClick={() => handleSave(todo._id)}>Save</button>
                        </div>
                      ) : (
                        <div>
                          <p>{todo.task}</p>
                          <p>{todo.description}</p>
                        </div>
                      )}
                    </div>
                    <div className='flex justify-end'>
                      <div>
                        <FaRegEdit className='icon w-14 h-5' onClick={() => handleEdit(todo._id)}/>
                      </div>
                      <div>
                        <span><BsFillTrashFill className='icon w-14 h-5' onClick={() => handleDelete(todo._id)}/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DisplayTable;
