import React from 'react';
import '../views/HomeView.scss';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    background: 'transparent',
  },
};

const HomeView = () => (
  <div tyle={styles.container} className="container">
    <h1 style={styles.title}>Your personal Phonebook</h1>
    <h2 style={styles.title}>we care about the environment</h2>
  </div>
);

export default HomeView;
