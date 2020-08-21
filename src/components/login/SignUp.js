import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputField from '../../common/InputField';
import isEmpty from '../../utils/isEmpty';
import { signUp } from '../../actions/authActions';
import validateEmail from '../../utils/validate';
import Button from '../../common/Button';

const SignUp = ({ history, signUp }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const [errors, setErrors] = useState({});
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const validate = () => {
    const _errors = {};

    if(isEmpty(name)) {
      _errors.name = 'Please enter your name'
    }
    if (isEmpty(email)) {
      _errors.email = 'Please enter email address.';
    }
    else if (!validateEmail(email)) {
      _errors.email = 'It must be a valid email.';
    };
    if (isEmpty(password)) {
      _errors.password = 'Please enter password.';
      
    }else if(password.length < 6) {
      _errors.password = 'Text length must be greater then 6.';
    };
    return _errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    const userData = {
      name: name,
      email: email,
      password: password
    };
    if (isEmpty(errors)) {
      signUp(userData, history)
    };
    setErrors(errors || {});
  };

  return (
    <div className="center">
      <div className="card">
        <div>
          <img src="/assets/img/training.jpg" alt="" className="logoLogin" />
          <h1> SignUp With SkillUp</h1>
        </div>
        <InputField
          type="text"
          label="name"
          placeholder="Name"
          name="name"
          handleChange={handleChange}
          errorMessage={errors.name}
          className="userName"
        />
        <InputField
          type="text"
          label="Email"
          placeholder="Email"
          name="email"
          handleChange={handleChange}
          errorMessage={errors.email}
          className="userName"
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          handleChange={handleChange}
          errorMessage={errors.password}
          className="userName"
        />
        <Button
          label="SignUp"
          handleSubmit={handleSubmit}
          className="button"
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUp })(SignUp);