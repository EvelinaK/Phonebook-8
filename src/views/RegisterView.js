import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { MDBInput } from 'mdbreact';
import '../views/RegisterView.scss';

// const InputPage = () => {
//   return <MDBInput label="Username" icon="user" />;
// };

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className="form-reg">
      <div>
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <h2 className="form-title">
            <strong>SIGN</strong>
            <a href="#!" className="form-title-green font-weight-bold">
              <strong> UP</strong>
            </a>
          </h2>
          <div className="form-group">
            <label>Name</label>

            <input
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right form-title">
            Already registered{' '}
            <a href="#" className="form-link form-title-green">
              <strong> sign in?</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
