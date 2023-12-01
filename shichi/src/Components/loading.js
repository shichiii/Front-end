import React from 'react';
import sucess from '../Static/sucess4.svg';
import './loading.css'; 

const SuccessPage = () => {
  return (
    <div className='center-container bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal'>
      <img src={sucess} alt='Success' className='small-image' />
    </div>
  );
};

export default SuccessPage;
