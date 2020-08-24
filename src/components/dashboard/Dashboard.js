import React from 'react';
import { connect } from 'react-redux';
import Button from '../../common/Button';
import SideBar from './SideBar';
import DashboardRoutes from './DashboardRoutes';

const Dashboard = ({ history }) => {
  
  const logout = () => {
    localStorage.clear();
    history.push('/login')
  }
  
  return (
    <>
      <React.Fragment>
        <div className="wrapper">
          <div className="head">
            <div className="row">
              <div className="col-sm-6 brandName">
                <img src="/assets/img/training.jpg" className="logo" alt="" width="70" height="50" />
                <strong className="ml-3 roleColor">SkillUp</strong>
              </div>
              <div className="col-sm-6 text-right">
                <Button
                  label="Sign Out"
                  handleSubmit={logout}
                  className="button"
                  img={<img src="/assets/img/whiteSignOut.png" alt="" width="20" className="mr-1" />}
                />
              </div>
            </div>
          </div>
          <div className="tabContainer">
            <SideBar />
            <div className="contentArea">
              <DashboardRoutes />
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default connect(null,)(Dashboard);