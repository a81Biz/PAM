import React, { useEffect } from 'react';

function Playground() {
  useEffect(() => {
    document.title = 'AM | JavaScript Playground'; 
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="./JavaScript-Playground/index.html" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="JavaScript Playground"
      ></iframe>
    </div>
  );
}

export default Playground;
