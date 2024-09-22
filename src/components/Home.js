import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'AM | Landing Page'; 
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="./LandingPage/index.html" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Landing Page"
      ></iframe>
    </div>
  );
}

export default Home;
