import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'AM | Landing Page';
  }, []); 

  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="./LandingPage/index.html" 
        style={{ width: '100%', height: '100%', border: 'none' }} 
        title="Landing Page"
      ></iframe>
    </div>
  );
}

export default App;
