import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
  return (
    <div className={style.landing_wrapper}>
        <h1>Welcome to my APP</h1>
        <p>To go to list of the latest shows, please click button below</p>
        <Link to="/shows"><button>GO</button></Link>
    </div>
  );
}
