const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE_IS_COMPLETED = 'TOGGLE_IS_COMPLETED'

const initialState = {
  tasks: [],
}

const totoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = {
        id: Date.now(),
        isCompleted: false,
        text: action.payload,
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      }
    }
    case TOGGLE_IS_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            if (task.isCompleted === false) {
              task.isCompleted = true
            } else if (task.isCompleted === true) {
              task.isCompleted = false
            }
          }
          return task
        }), 
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      }
    default:
      return state
  }
}

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
})

export const toggleIsCompleted = id => ({
  type: TOGGLE_IS_COMPLETED,
  payload: id,
})

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id,
})

export default totoReducer
