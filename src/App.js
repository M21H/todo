import './App.css'
import { Add } from './components/Add'
import { List } from './components/List'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <center>
          <h1>TODO</h1>
        </center>
        <Add />
        <List />
      </div>
    </div>
  )
}

export default App
