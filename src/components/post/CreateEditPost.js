import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import InputField from '../../common/InputField';
import Button from '../../common/Button';
import { createPost } from '../../actions/postActions';
import isEmpty from '../../utils/isEmpty';

const CreateEditPost = ({ history, createPost, post: { create_post } }) => {
  
  const [error, setError] = useState({});
 
  const [formData, setFormData] = useState({
    text: '',
  }); 
  
  const { text }  = formData;
  
  useEffect(() => {
    if(create_post) {
      setFormData({
        text: create_post?.text,
      });
    };
  }, [create_post]);

  const validate = () => {
    const _errors = {};

    if(isEmpty(text)) {
      _errors.text = 'Please Enter text.';

    }else if(text.length < 10) {
      _errors.text = 'Text length must be greater then 10.';
    };
    return _errors;
  };
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    const errors = validate();
    const userData = {
      text: text
    };
    if(isEmpty(error)) {

      createPost(userData, history);
    };
    setError(errors || {});
  };

  const handleCancel = (e) => {
    setFormData({
      text: ''
    });
  };

  return (
    <Card.Body>
      <div className="text-left mb-5 labelColor">
        <h1>
        </h1>
      </div>
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

export default connect(mapStateToProps, {createPost})(CreateEditPost);