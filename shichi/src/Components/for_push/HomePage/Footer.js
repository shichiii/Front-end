import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../Static/whitelogo.svg";
import Fo from '../../../Static/footer.svg';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="bg-pallate-Gunmetal">
      <div className="flex items-start justify-center">
        <img className="w-auto " src={Fo} alt="" />
      </div>

      <footer className="flex flex-col justify-between items-center bg-pallate-Gunmetal py-8">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link to="/home">
              <img className="w-auto h-10" src={logo} alt="" />
            </Link>
            <p className="max-w-md mx-auto  mt-4 text-white">
            The Shichii team decided to have a project for car rental, providing all users with the opportunity to rent their desired car for a specific period or advertise their own cars for rent.
            </p>
            <ScrollLink to="start" smooth={true} className="w-full sm:w-auto mt-2 sm:mt-0 p-4">
                <Link
                  to={currentPath !== "/home" ? "/home" : undefined}
                  className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-pallate-Dark_Sky_Blue rounded-md sm:mx-2 sm:order-2 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Get started
                </Link>
              </ScrollLink>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
              <a href="https://github.com/shichiii" className="text-white hover:text-pallate-Dark_Sky_Blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z" fill="currentColor"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
