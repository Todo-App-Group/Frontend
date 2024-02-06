'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface Todo {
  task: string;
}

const DisplayTable = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get<Todo[]>('http://localhost:3000/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='flex justify-center'>
      <div className='border border-black w-[500px]'>
        <div>
          {todos.length === 0
            ? <div><h2>No Record</h2></div>
            : todos.map(todo => (
              <div key={todo.task}>
                <div className='bg-red-400 border border-white text-white h-14 lh:w-[500px]'>
                {todo.task}
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
