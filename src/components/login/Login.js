import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputField from '../../common/InputField';
import { login } from '../../actions/authActions';
import Button from '../../common/Button';
import isEmpty from '../../utils/isEmpty';
import validateEmail from '../../utils/validate'
import  { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ login }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const validate = () => {
    const _errors = {};

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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    const userData = {
      email: email,
      password: password
    };
    if(isEmpty(errors)) {
      login(userData, history);
    };
    setErrors(errors || {} )
  };
  
  toast.configure({
    position: "top-center",
    autoClose: 3000,
  });

  return (
    <div className="center">
      <div className="card">
        <div>
          <img src="/assets/img/training.jpg" alt="" className="logoLogin" />
          <h1>Sign in SkillUp</h1>
        </div>
        <InputField
          type="text"
          label="Email"
          placeholder="Email"
          name="email"
          errorMessage={errors.email}
          handleChange={handleChange}
          className="userName"
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          errorMessage={errors.password}
          handleChange={handleChange}
          className="userName"
        />
        <Button
          label="Login"
          handleSubmit={handleSubmit}
          className="button"
        />
        <Button
          label="Create a account"
          className="button ml-1"
          handleSubmit={() => history.push('/signUp')}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);