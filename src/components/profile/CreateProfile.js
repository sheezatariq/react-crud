import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import InputField from '../../common/InputField';
import Button from '../../common/Button';
import { createProfile } from '../../actions/profileAction';
import  DropDown from '../../common/DropDown';
import isEmpty from '../../utils/isEmpty';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProfile = ({ history, createProfile, }) => {

  const statusProfile = [{id: 1, name: 'Active'}, {id: 2, name: 'inActive'}]

  const skillStatus = [{id: 1, name: 'Recat'}, {id: 2, name: 'JS'}, {id: 3, name: 'Node'}, {id:4, name: 'Flutter'}]
  
  const [error, setError] = useState({});
 
  const [formData, setFormData] = useState({
    text: '',
    status: '',
    skills: ''
  }); 
  
  const { text, status, skills }  = formData;
  
  const validate = () => {
    const _errors = {};

    if(isEmpty(text)) {
      _errors.text = 'Please Enter Text.';
    };
    if(isEmpty(status)) {
      _errors.status = 'Please Select Status'
    };
    if(isEmpty(skills)) {
      _errors.skills = 'Please Select Skill'
    }
    return _errors;
  };
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    const errors = validate();
    const userData = {
      handle: text,
      skills: skills,
      status: status
    };
    if(isEmpty(error)) {

      createProfile(userData, history);
    };
    setError(errors || {});
  };

  const handleCancel = (e) => {
    setFormData({
      text: '',
      skills: '',
      status: ''
    });
  };

  toast.configure({
    position: "top-center",
    autoClose: 3000,
  });
  
  return (
    <Card.Body>
      <div className="row">
        <div className="col-sm-4">
          <InputField
            type="text"
            label="Text"
            placeholder="Text"
            name="text"
            className="Inputs"
            errorMessage={error.text}
            handleChange={handleChange}
            value={text}
          />
          <DropDown
            name="status"
            label="Select status"
            textProperty="name"
            valueProperty="name"
            options={statusProfile}
            onChange={handleChange}
            errorMessage={error.status}
            value={status}
            statment="Choose a status"
            placeholder="status"
          />
          <DropDown
            name="skills"
            label="Select skills"
            textProperty="name"
            valueProperty="name"
            errorMessage={error.skills}
            options={skillStatus}
            onChange={handleChange}
            statment="Choose Experience Skill"
            value={skills}
            placeholder="status"
          />
        </div>
      </div>
      <div className="row ml-1">
        <Button
          label="Submit"
          className="button"
          handleSubmit={handleSubmit}
        /> 
        <Button
          label="Cancel"
          className="button ml-1"
          handleSubmit={handleCancel}
        />
      </div>
    </Card.Body>
  );
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { createProfile })(CreateProfile);