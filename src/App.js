import './App.css'
import { AddForm } from './components/AddForm/AddForm'
import { TodoList } from './components/TodoList/TodoList'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='app__title'>
          <p>Website todo</p>
        </div>
        <AddForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
