import React from "react";

const ActionsDropDown = ({ handleDelete }) => {

  return (
    <div className="dropdown d-block">
      <button className="btn btn-light dropDownAction" type="button" data-toggle="dropdown" >
        <span className="mr-2 dropdown-icon">Action</span>
      </button>
      <div className="dropdown-menu">
        {handleDelete &&
          <button
            className="dropdown-item cursorPointer mr-2 mt-2"
            onClick={handleDelete}>
            Delete
          </button>
        }
      </div>
    </div>
  );
};
export default ActionsDropDown;