import './App.css';
import Todo from './components/todo';
import Register from './components/register';
// import List from './components/list';
// import Table from './components/table';



function App() {
  return (
    <div className='App'>
      {/* <List />
      <Table />*/}
      <Register /> 
      <Todo />
    </div>
  );
}

export default App;
