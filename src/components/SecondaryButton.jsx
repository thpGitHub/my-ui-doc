import React, { useState } from 'react';

const SecondaryButton = ({ children = 'SecondaryButton' }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '5px',
    backgroundColor: hover ? 'white' : 'gray',
    color: hover ? 'gray' : 'white',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;