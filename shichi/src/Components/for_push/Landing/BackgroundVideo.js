import React from 'react';
import { useEffect } from 'react';
import '../../../Styles/for_push/Landing/BackgroundVideo.css';
import video from '../../../Static/mio1.mp4'

const BackgroundVideo = () => {
    useEffect(() => {
        const video = document.getElementById('background-video');
        video.playbackRate = 1.5;
      }, []);
  return (
    <div className="background-video">
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
