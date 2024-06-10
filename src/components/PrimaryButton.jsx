import React, { useState } from 'react';

const PrimaryButton = ({ children = 'PrimaryButton' }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '5px',
    backgroundColor: hover ? 'white' : 'blue',
    color: hover ? 'blue' : 'white',
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

export default PrimaryButton;