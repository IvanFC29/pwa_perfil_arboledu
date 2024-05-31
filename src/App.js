
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';

function App() {
  // Instalador
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showInstallParrafo, setShowParrafo] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowParrafo(true);
      setShowInstallButton(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
        setShowParrafo(false);
      });
    }
  };
  return (
    <Router>
     <div className='App'>
      <header className="App-header">
        <div id="div-button">
          {showInstallParrafo && (
            <p id="parrafoInstall">Instala la aplicación para acceder de manera offline</p>
          )}
          {showInstallButton && (
            <button class="install-button" onClick={handleInstallClick}>Instalar ArbolEdu</button>
          )}
        </div>        
      </header>  
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

