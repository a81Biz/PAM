import React, { useEffect } from 'react';

function Infographic() {
  useEffect(() => {
    document.title = 'AM | Infographic'; 
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="./infographic" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Infographic"
      ></iframe>
    </div>
  );
}

export default Infographic;
