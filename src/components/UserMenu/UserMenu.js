import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  onlogout: {
    borderRadius: 5,
    border: 'none',
    margin: '12px',
    fontSize: '16px',

    background: ('to right', '#a9b899 20%', '#555e4c 100%'),
    color: '#fff',
    padding: '0.5em',
    // &:hover,
    // &:focus {
    //   background: rgb(170, 189, 171);
    //   color: rgb(88, 134, 107);
    //   box-shadow: 0 0 15px rgba(140, 179, 155, 0.8);
    // }
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  const onLogout = () =>
    useCallback(() => dispatch(authOperations.logOut()), [dispatch]);
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button style={styles.onlogout} type="button" onClick={onLogout()}>
        Logout
      </button>
    </div>
  );
}
