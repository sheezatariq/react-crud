import React from 'react';
import { Route,Switch, withRouter, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import SignUp from './components/login/SignUp';

function App() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signUp' component={SignUp} />
      <Route path='/dashboard/:page?' component={Dashboard} />
      <Redirect from='/' exact to='/dashboard/:page?' />
    </Switch>
  );
};
export default withRouter(App);

