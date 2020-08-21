import React from 'react';

const Button = ({  className, handleSubmit, label, img }) => {
  return (
    <button
      className={className}
      onClick={handleSubmit}
    >
      {img}
      {label}
    </button>
  );
};

export default Button;