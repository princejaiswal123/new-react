import React, { useRef } from 'react';

function Question14() {
  const input = useRef([]);

  const ControlMove = (e, pos) => {
    const value = e.target.value;

e.target.value = value;

    if (value && pos < input.current.length - 1) {
      input.current[pos + 1].focus();
    }
  };

  const Keys = (press, pos) => {
    if (press.key === 'Backspace') {
      if (press.target.value === '' && pos > 0) {
        input.current[pos - 1].focus();
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
      <h2>Enter OTP</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              {[0, 1, 2, 3].map((i) => (
          <input
            key={i} type="text" maxLength="1" onChange={(e) => ControlMove(e, i)} onKeyDown={(e) => Keys(e, i)} ref={(y) => (input.current[i] = y)}
            style={{
              width: '45px', height: '45px', fontSize: '26px', textAlign: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Question14;
