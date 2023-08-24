import React,{useState} from 'react'

function List() {
  const [num, setNum] = useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div>
      <ul>
        {num.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setNum([...num, num.length+1])}>push</button>
      <button onClick={() => (num.slice(0, num.length-1))}>pop</button>
      <button onClick={()=> setNum(num.slice(1))}>shift</button>
      <button onClick={() => setNum([num[0]-1, ...num])}>unshift</button>
    </div>
  )
}

export default List