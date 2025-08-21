import React, { useEffect } from 'react';

function Playground() {
  useEffect(() => {
    document.title = 'ECV | Tiradas de Dados'; 
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="./Dados/index.html" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="JavaScript Playground"
      ></iframe>
    </div>
  );
}

export default Playground;
