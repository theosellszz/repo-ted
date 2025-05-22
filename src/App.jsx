import React from 'react';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div>
      <StarryBackground />
      <div style={{ color: 'white', padding: '2rem' }}>
        <h1>1:1 Resell Website</h1>
        <p>Products go here...</p>
        {/* Add your product and checkout components here */}
      </div>
    </div>
  );
}

export default App;
