import React, { useEffect, useState } from 'react';

function App() {
  const [view, setView] = useState(true);

  const toggle = () => {
    setView((prev) => !prev);
  };

  const ConsoleMess = () => {
    useEffect(() => {
      console.log('Component Mounted');

      return () => {
        console.log('Component Unmounted');
      };
    }, []);

    return (
      <div>
        <p>Component is mounted and unmounted repeatedly.</p>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center',}}>
        <h1>Toggle</h1>
      <button onClick={toggle}>
        {view ? 'Hide' : 'Show'}
      </button>

      <div >
        {view && <ConsoleMess/>}
      </div>
    </div>
  );
}

export default App;
