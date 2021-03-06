import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const Load = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="Puff"
        color="#24755b"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Load;
