import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 2);
  }
  const decrement = () => {
    setCount(count - 2);
  }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter