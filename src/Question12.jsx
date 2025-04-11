import { useRef } from 'react';

function Question12() {
  const input = useRef(null);

  const Focus = () => {
    if (input.current) {
      input.current.focus();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Focus with useRef</h2>
      <input
        ref={input}
        type="text"
        placeholder="Click button to focus"
        style={{ padding: '0.7rem', width: '200px' }}
      />
      <br /><br />
      <button onClick={Focus} style={{ padding: '0.4rem 0.5rem' }}>
        Focus button
      </button>
    </div>
  );
}

export default Question12;
