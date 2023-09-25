import React, { useRef, useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { groupNumber } from '../../data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './Statistics.module.css';
import { NavLink } from 'react-router-dom';

const Statistics = ({details}) => {
  const themeContainer2Ref = useRef(null);
  const [isThemeContainer2Visible, setIsThemeContainer2Visible] = useState(false);
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsThemeContainer2Visible(true);
    }
    else {
      setIsThemeContainer2Visible(false);
    }
  };

  // Initialize Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (themeContainer2Ref.current) {
      observer.observe(themeContainer2Ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    {console.log()}
      <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview Statistics</span>
        <div className={`${css.cards} grey-container`}>
          <div>
            <div className={css.arrowIcon}>
              <BsArrowUpShort />
            </div>

            <div className={css.card}>
              <span>Water Depth</span><span>Water Depth Analysis</span>
            </div>
          </div>

          <div className={css.card}>
            <span>Water discharge</span><span>{(details["expectedDischarge"]/10000)*100}%</span>
          </div>

          <div className={css.card}>
            <span>Water quality</span><span>{(details["qualityIndex"] * 100).toFixed(2)} %</span>
          </div>

          <div className={css.card}>
            <span> Min. Depth Encounter</span><span> {details["minDepthEncounter"]} ft </span>
          </div>
        </div>
        <StatisticsChart />
      </div>
      <div
        className={`${css.container} ${isThemeContainer2Visible ? 'animate' : ''} theme-container2`}
        ref={themeContainer2Ref}
      >
        <span className={css.title}>Current results </span>
        <div className={`${css.cards} grey-container`}>
          <div className={css.card}>
            <span>Should we construct a well here?</span><span>{details["WaterWellConstruct"] ? "Yes" : "No" }</span>
          </div>
          {details["WaterWellConstruct"] ? <div className={css.card}>
            <span>What technique should we use to dig a well here?</span><span>Rotary Drilling</span>
          </div> :<div className={css.card}>
            <span></span><span></span>
          </div> }

        </div>
        <NavLink
            to="/project"
          >
        <a href="#_" class="back-button relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
        <p class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
        <svg class="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </p>
        <p class="absolute flex items-center justify-center w-full h-full text-blue-200 transition-all duration-300 transform group-hover:translate-x-full ease">Back</p>
        <p class="relative invisible">Button Text</p>
        </a>

        </NavLink>

      </div>
    </>
  );
};

export default Statistics;
