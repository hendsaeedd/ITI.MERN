import './App.css';
import Header from './components/header';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Skilles from './components/skilles';


function App() {
  return (
    <div className='App'>
    <Header />
    <About />
    <Education />
    <Experience />
    <Skilles />
    </div>
  );
}

export default App;
