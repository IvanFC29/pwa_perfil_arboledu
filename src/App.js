import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
     <div className='App'> 
        <div className="App-seccion">     
          <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/register' element={<Register />}></Route>
          </Routes>
      </div>
     </div>
    </Router>
  );
}

export default App;

