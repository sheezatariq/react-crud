import React from 'react';
import { Route,Switch,  withRouter } from 'react-router-dom';
import Post from '../post/Post';
import CreateEditPost from '../post/CreateEditPost';
import CreateProfile from '../profile/CreateProfile'

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route exact path='/dashboard/post' component={Post} />
      <Route exact path='/dashboard/post/create' component={CreateEditPost} />
      <Route exact path='/dashboard/profile' component={CreateProfile} />
    </Switch>
  );
};

export default withRouter(DashboardRoutes);
