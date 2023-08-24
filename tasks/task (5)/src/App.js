import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Nav from './components/nav';
import Fav from './pages/fav';
// import Counter from './pages/counter';
import { Provider } from 'react-redux';
import store from './Redux/store';


const App = () => {
  return (
    <Provider store={store}>
    <div className="App bg-slate-900">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        {/* <Route path="/countre" element={<Counter />} /> */}
      </Routes>
    </div>
    </Provider>
  );
};

export default App;
