import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './pages/nav';
import HomePage from './pages/homePage';
import Register from './components/register';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/login' element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
