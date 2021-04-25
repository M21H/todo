import React from 'react'
import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem/TodoItem'

export const List = () => {
  const tasks = useSelector(state => state.todos.tasks)
  console.log(tasks)

  return (
    <ol>
      {tasks.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ol>
  )
}
