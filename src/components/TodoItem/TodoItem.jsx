import { useDispatch } from 'react-redux'
import { deleteTask, toggleIsCompleted } from '../../redux/totoReducer'

export const TodoItem = ({ text, isCompleted, id }) => {
  const dispatch = useDispatch()

  let handleIsCompleted = () => {
    dispatch(toggleIsCompleted(id))
  }

  let handleDelete = () => {
    dispatch(deleteTask(id))
  }

  return (
    <li>
      {isCompleted ? (
        <span style={{ textDecoration: 'line-through' }}>{text}</span>
      ) : (
        <span>{text}</span>
      )}

      <input type='checkbox' onClick={handleIsCompleted} />
      <button onClick={handleDelete}>delete</button>
    </li>
  )
}
