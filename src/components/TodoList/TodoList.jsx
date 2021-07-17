import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem/TodoItem'

export const TodoList = () => {
	const { tasks } = useSelector(({ todos }) => todos)
	console.log(tasks)

	return (
		<ol style={{ marginLeft: '20px' }}>
			{tasks.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ol>
	)
}
