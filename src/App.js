import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import MiJardin from './components/MiJardin';
import Aprende from './components/Aprende';
import Consejos from './components/Consejos';
import Layout from './components/Layout'
import Categorias from './components/Categorias';
import './App.css';

function App() {
  return (
   <Router>
    <div className='App'> 
      <div className="App-seccion">     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/mi-jardin' 
            element={
              <Layout>
                <MiJardin />
              </Layout>
            } 
          />
          <Route 
            path='/aprende' 
            element={
              <Layout>
                <Aprende />
              </Layout>
            } 
          />
          <Route 
            path='/consejos' 
            element={
              <Layout>
                <Consejos />
              </Layout>
            } 
          />
          <Route path='/categorias' element={<Categorias />} />
        </Routes>
      </div>
      
    </div>
   </Router>
  );
}

export default App;

/*
 <Route 
            path='/categorias' 
            element={
              <Layout>
                <Categorias />
              </Layout>
            } 
          />
          <Route 
            path='/categorias/frutales' 
            element={
              <Layout>
               
                </Layout>
              } 
            />
            <Route 
              path='/categorias/verduras' 
              element={
                <Layout>
                 
                </Layout>
              } 
            />
            <Route 
              path='/categorias/flores' 
              element={
                <Layout>
                 
                </Layout>
              } 
            />
            <Route 
              path='/categorias/arboles' 
              element={
                <Layout>
                 
                </Layout>
              } 
            />
*/