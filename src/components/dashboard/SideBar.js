import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <div className="navLinks" id="myNavbar">
        <NavLink to="#" className="nav-link link" data-page-name="summery" >
          <img src="/assets/img/dashboard.png" alt="" width="20" className="mr-1"/>
          <strong> Dashboard </strong>
        </NavLink>

        <NavLink to="/dashboard/post" className="nav-link link" data-page-name="summery">
          <img src="/assets/img/post.png" alt="" width="20" className="mr-1" />
          <strong> Post </strong>
        </NavLink>

        <NavLink to="/dashboard/google_map" className="nav-link link" data-page-name="summery" >
          <img src="/assets/img/google-map.jpeg" alt="" width="20" className="mr-1" />
          <strong> Map </strong>
        </NavLink>

        <NavLink to="/dashboard/calculator" className="nav-link link" data-page-name="summery" >
          <img src="/assets/img/calculator.png" alt="" width="20" className="mr-1" />
          <strong> Calculator </strong>
        </NavLink>

        <NavLink to="/dashboard/profile" className="nav-link link" data-page-name="summery" >
          <img src="/assets/img/profile.png" alt="" width="20" className="mr-1" />
          <strong> Profile </strong>
        </NavLink>

        <NavLink to="/dashboard/camera" className="nav-link link" data-page-name="summery">
          <img src="/assets/img/camera.png" alt="" width="20" className="mr-1" />
          <strong> Image </strong>
        </NavLink>
        
        
      </div>
    </>
  );
};

export default SideBar;
