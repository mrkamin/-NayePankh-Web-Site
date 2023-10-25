import React from 'react';
import { HomeBgImage } from './Varaible';
import '../css/home.css';

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-container-back-image bg-dark">
        <img src={HomeBgImage} alt="HomeLogo" className="home-bg-image" />
      </div>
    </div>
  </>
);
export default Home;
