import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Post from '../post/Post';
import CreateEditPost from '../post/CreateEditPost';
import CreateProfile from '../profile/CreateProfile';
import CalculatorSample from '../calculator3/CalculatorSample';
import Map from '../../google/Map';
import WebcamCapture from '../webimage/WebcamCapture';



const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path='/dashboard/post' component={Post} />
      <Route exact path='/dashboard/post/create' component={CreateEditPost} />
      <Route exact path='/dashboard/profile' component={CreateProfile} />
      <Route exact path= '/dashboard/calculator' component={CalculatorSample} />
      <Route exact path='/dashboard/google_map' component={Map} />
      <Route exact path='/dashboard/camera' component={WebcamCapture} />
    </Switch>
  );
};

export default withRouter(DashboardRoutes);
