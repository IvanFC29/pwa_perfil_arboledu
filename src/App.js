
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  // Instalador
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
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
      });
    }
  };
  return (
     <div className='App'>
      <header className="App-header">
        <div id="div-button">
          {showInstallButton && (
            <button class="install-button" onClick={handleInstallClick}>Instalar ArbolEdu</button>
          )}
        </div>     
        <Home />
      </header>  
     </div>
  );
}

export default App;

