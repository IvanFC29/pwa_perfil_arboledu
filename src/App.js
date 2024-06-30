import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
//import Register from './components/Register';
import MiJardin from './components/MiJardin';
import Aprende from './components/Aprende';
import Consejos from './components/Consejos';
import Layout from './components/Layout'
import Categorias from './components/Categorias';
import Elemento from './components/Elemento';
import Planta from './components/Plantas';
import { MiJardinProvider } from './context/MiJardinContenedor';
import './App.css';

function App() {
  return (
    <MiJardinProvider>
   <Router>
    <div className='App'> 
      <div className="App-seccion">     
        <Routes>
          <Route path='/' element={<Home />} />
          {/*<Route path='/register' element={<Register />} />*/}
          <Route path='/mi-jardin' element={<Layout> <MiJardin /> </Layout>} />
          <Route path="/aprende" element={<Layout><Aprende /></Layout>} />
          <Route path="/consejos" element={<Layout><Consejos /></Layout>} />
          <Route path="/categorias" element={<Layout><Categorias /></Layout>} />
          <Route path="/categorias/:categoria" element={<Layout><Elemento /></Layout>} />  
          <Route path="/categorias/:categoria/:id" element={<Layout><Planta /></Layout>} /> 
        </Routes>
      </div>
      
    </div>
   </Router>
   </MiJardinProvider>
  );
}

export default App;
