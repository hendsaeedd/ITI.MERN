import React, {useState} from 'react'

function Todo() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [deletedTodos, setDeletedTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {title : input, done : 'unchecked' }])
    setInput('')
  }

  const makeDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].done = 'checked'
    setTodos(newTodos)
  }

  const handleDelete = (index) => {
    const newTodos = [...todos]
    const deletedTodo = newTodos.splice(index, 1)
    setTodos(newTodos)
    setDeletedTodos([...deletedTodos, deletedTodo])
  }

  return (
    <div>
      <h1>Todo</h1>
      <form>
        <section>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit" onClick={addTodo}>Add Todo</button>
        </section>
      <ul className="items">
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
            <input type="checkbox" checked={todo.done === 'checked'} onChange={() => makeDone(index)} />
            <span style={{textDecoration: todo.done === 'checked' ? 'line-through' : 'none'}}>{todo.title}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      </form>
    </div>
  )
}

export default Todo