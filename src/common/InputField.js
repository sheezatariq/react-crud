import React from 'react';

const InputField = ({ type, name, value, placeholder, handleChange, onEnterPress, id, className, errorMessage, label, ...rest }) => {
  
  const handleEnterKey = e => {
    if (e.keyCode === 13 && onEnterPress) {
      onEnterPress(e);
    };
  };

  return (
    <div style={{ background: 'white'}}>
      {label &&
        <div className="caption">
          <label>{label}</label>
        </div>
      }
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
        className={errorMessage ? "errorClass" : className}
        onKeyDown={handleEnterKey}
      />
      <div className="spaceRemove">
        {errorMessage &&
          <div className='errorMessage'>{errorMessage}</div>
        }
        <br />
      </div>
    </div>
  );
};

export default InputField;