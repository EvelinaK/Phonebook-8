import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#003530',
  },
  activeLink: {
    color: '#55b359',
  },
};

const AuthNav = () => (
  <div style={styles.header}>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
