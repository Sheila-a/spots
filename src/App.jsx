import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a' element={<Home2 />} />
      </Routes>
    </div>
  );
}

export default App;
