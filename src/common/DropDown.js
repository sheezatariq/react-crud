import React from "react";

const DropDown = ({ name, label, options, statment, valueProperty, value, textProperty, errorMessage, children, ...rest }) => {
  delete rest.tReady;

  return (
    <div className="bottom">
      {label &&
        <div className="caption">
          <label>{label}</label>
        </div>
      }
      <select value={value} id={name} name={name} className={errorMessage ? "errorClassDropDown" : "inputsDropDown"} {...rest}>
        <option value="">{statment}</option>
        {options !== 1 &&
          options.map((option, index) => (
            <option key={index} value={option[valueProperty]}>
              {option[textProperty]}
            </option>
          ))
        }
      </select>
      {children}
      <div className="spaceRemoveDropDown">
        {errorMessage &&
          <div className='errorMessageDropDown'>{errorMessage}</div>
        }
        <br />
      </div>
    </div>
  );
};

export default DropDown;