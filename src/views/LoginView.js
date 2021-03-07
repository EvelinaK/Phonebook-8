import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../views/LoginView.scss';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-cont">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-title">
            <strong>LOG</strong>
            <a href="#!" className="form-title-green font-weight-bold">
              <strong> IN</strong>
            </a>
          </h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign in
          </button>
          <p className="forgot-password form-title text-right">
            Forgot
            <a href="#" className="form-link form-title-green">
              <strong> password?</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
