import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleIsCompleted } from '../../../redux/totoReducer'

export const TodoItem = React.memo(({ text, isCompleted, id }) => {
	const dispatch = useDispatch()

	const handleIsCompleted = () => {
		dispatch(toggleIsCompleted(id))
	}

	const handleDelete = () => {
		dispatch(deleteTask(id))
	}

	return (
		<li>
			<input type='checkbox' checked={isCompleted} onChange={handleIsCompleted} />
			<span style={{ textDecoration: isCompleted && 'line-through' }}>{text}</span>
			<button type='button' onClick={handleDelete}>
				delete
			</button>
		</li>
	)
})
