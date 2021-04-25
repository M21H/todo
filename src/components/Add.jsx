import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/totoReducer'

export const Add = () => {
  const dispatch = useDispatch()

  const [input, setInput] = React.useState('')
  
  let handleAddTask = () => {
    if (input === '') {
      alert('empty')
    } else {
      dispatch(addTask(input))
      setInput('')
    }
  }

  return (
    <>

      <input
        className='input'
        type='text'
        placeholder={'write your task'}
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button className='btn' onClick={handleAddTask}>
        add
      </button>
    </>
  )
}
