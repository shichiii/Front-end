import React from 'react';
import fail from '../Static/fail.svg';
import './loading.css';

const FailurePage = () => {
  return (
    <div className='center-container bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal'>
      <div className="flex flex-col items-center">
        <img src={fail} alt='Failure' className='small-image' />
        
        <a
                  href="/forgot"
                  className="mt-3 text-black dark:text-white  hover:text-pallate-Dark_Sky_Blue hover:font-bold inline-flex animate-bounce items-center"
                >
                  Back to Previous Page
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
      
      </div>
    </div>
  );
};

export default FailurePage;
