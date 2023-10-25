import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { HomeBgImage } from './Varaible';
import '../css/home.css';

const Home = () => {
  const homeContainer = useRef();
  const homeContParagraph = useRef();

  useLayoutEffect(() => {
    const contex = gsap.context(() => {
      gsap.from(homeContParagraph.current, {
        duration: 3,
        y: '20%',
        ease: 'bounce',
      });
    }, homeContainer);
    return () => contex.revert();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-container-back-image bg-dark">
          <img src={HomeBgImage} alt="HomeLogo" className="home-bg-image" />
        </div>
        <div className="overlay position-absolute" />
        <div className="position-absolute license">
          <h4>UP GOVT. | 80G&12A Registered</h4>
        </div>
        <div
          className="home-cont-paragraph position-absolute text-white d-flex flex-column gap-5"
          ref={homeContParagraph}
        >
          <h1 className="fw-bolder">
            It&apos;s that easy to
            {' '}
            <br />
            {' '}
            bring a Smile on
            {' '}
            <br />
            Their Faces
          </h1>
          <p>
            We don&apos;t ask for much, just help us with what
            <br />
            you can-Be it Money, skill or Your time
          </p>
          <button type="button" className="btn bg-white donate-btn">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
