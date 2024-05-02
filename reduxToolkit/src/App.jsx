import './App.css'
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import {store} from "./App/store"
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>


      <Todos />
      <AddTodo />


    </Provider>
  )
}

export default App
