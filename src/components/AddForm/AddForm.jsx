import React from 'react'
import './AddForm.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/totoReducer'

export const AddForm = React.memo(() => {
	const dispatch = useDispatch()

	const [input, setInput] = React.useState('')

	const handleAddTask = () => {
		if (input.trim()) {
			dispatch(addTask(input.trim()))
			setInput('')
		} else {
			alert('write task')
		}
	}

	return (
		<div className='addForm'>
			<input
				className='input'
				type='text'
				placeholder={'write your task'}
				autoFocus={true}
				onBlur={handleAddTask}
				value={input}
				onChange={e => setInput(e.target.value)}
			/>

			<div className='button'>
				<button onClick={handleAddTask} disabled={!input}>
					add
				</button>
			</div>
		</div>
	)
})
