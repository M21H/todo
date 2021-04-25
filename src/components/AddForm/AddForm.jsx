import React from 'react'
import './AddForm.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/totoReducer'

export const AddForm = () => {
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
    <div className='addForm'>
      <input
        className='input'
        type='text'
        placeholder={'write your task'}
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <div className='button'>
        <button onClick={handleAddTask}>add</button>
      </div>
    </div>
  )
}
