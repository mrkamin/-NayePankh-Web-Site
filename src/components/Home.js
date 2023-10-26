import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IMG1 from '../assets/IMG-20231025-WA0036.jpg';
import IMG2 from '../assets/IMG-20231025-WA0046.jpg';
import { Aboutusimg } from './Varaible';
import '../css/home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeContParagraph = useRef();
  const homeAboutContainer = useRef();

  useEffect(() => {
    const contex = gsap.context(() => {
      gsap.from(homeAboutContainer.current, {
        y: '40%', // Move from the bottom
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: homeAboutContainer.current,
          start: 'top 100%', // Adjust this value as needed to control when the animation starts
          end: 'top 60%', // Adjust this value as needed to control when the animation ends
          scrub: 1, // Smooth scrolling effect
        },
      });
      gsap.from(homeContParagraph.current, {
        duration: 3,
        y: '20%',
        ease: 'bounce',
      });
    });
    return () => contex.revert();
  }, []);

  return (
    <>
      <section className="home-cont-sect-one w-100">
        <div className="home-cont-sect-one-items w-100">
          <div className="home-cont-sect-one-items-item-one w-100">
            <img
              src={IMG1}
              alt="HomeLogo"
              className="home-cont-sect-one-items-item-one-img w-100"
            />
          </div>
          <div className="overlay position-absolute w-100" />
          <div className="home-cont-sect-one-items-item-two position-absolute">
            <h4>UP GOVT. | 80G&12A Registered</h4>
          </div>
          <div
            className="home-cont-sect-one-items-item-three position-absolute text-white d-flex flex-column gap-5"
            ref={homeContParagraph}
          >
            <h1 className="home-cont-sect-one-items-item-three-h1">
              It&apos;s that easy to
              {' '}
              <br />
              {' '}
              bring a Smile on
              {' '}
              <br />
              Their Faces
            </h1>
            <p className="home-cont-sect-one-items-item-three-p fs-4">
              We don&apos;t ask for much, just help us with what
              <br />
              you can-Be it Money, skill or Your time
            </p>
            <button
              type="button"
              className="home-cont-sect-one-items-item-three-btn btn bg-white p-2 w-50 fs-4"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>
      <section className="home-cont-sect-two container">
        <div
          className="container grid home-cont-sect-two-items gap-5 position-relative"
          ref={homeAboutContainer}
        >
          <img
            src={Aboutusimg}
            alt="aboutimg"
            className="w-100 home-cont-sect-two-items-item-one-img"
            ref={homeAboutContainer}
          />

          <div className="d-flex flex-column justify-content-center gap-3 home-cont-sect-two-items-item-two">
            <h5 className="fs-4">ABOUT US</h5>
            <h1>
              Think global,
              {' '}
              <br />
              {' '}
              Act local.
            </h1>
            <p>
              &ldquo;NayePankh Foundation&ldquo; is a non governmental
              organisation with a strong desire to help the society and make it
              a better place for all, by doing everything in our power and to
              make our vision successful we would require your vital support.
              Service to mankind is the service to god. Let&apos;s revolutionise
              the society together!.
            </p>
            <div
              className="d-flex justify-content-between"
            >
              <button
                type="button"
                className="btn bg-white donate-btn"
                alt="learn more btn"
              >
                LEARN MORE
              </button>
              <button
                type="button"
                className="btn bg-white donate-btn"
                alt="learn more btn"
              >
                OUR CERTIFICATES
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cont-sect-three">
        <div className="">
          <div>
            <img src={IMG2} alt="photo2" className="w-100" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
