import React from "react";
import avatar from "../../Static/1.jpg";
import atra from "../../Static/atra.jpeg";
import anita from "../../Static/anita.jpeg";
import helen from "../../Static/helen.jpeg";
import hazhir from "../../Static/hazir.gif";
import sadegh from "../../Static/goldon.gif";
import NavBar from "../for_push/HomePage/NavBar";
import Footer from "../for_push/HomePage/Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div
        id="team"
        class="section relative pt-20 pb-8 md:pt-16 bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal"
      >
        <div class="container xl:max-w-6xl mx-auto px-4">
          <header class="text-center mx-auto mb-12">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
             Our Team
            </h2>
            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            </svg> */}
          </header>

          <div class="flex flex-wrap flex-row -mx-4 justify-center">
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={atra}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Atra NikPayan
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Front End Developer
                  </p>

                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/fatemehnikpayan"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={anita}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Anita Talkhabi
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Front End Devloper
                  </p>

                
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/anitatalkhabi"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={hazhir}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Hazhir Yousefi
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Front End Developer
                  </p>

         
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/Hazhir2002"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={sadegh}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Sadegh Mousa zadeh
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Front End Developer
                  </p>

               
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/morgan09mj"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={sadegh}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Reyhaneh Shahrokhian
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Back End Developer
                  </p>

                  
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/reyhaneshahrokhian"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={sadegh}
                    class="max-w-full h-60 mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Ali Soltani
                  </p>
                  <p class="text-white leading-relaxed font-light">
                    Back End Developer
                  </p>

                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/soltaniali"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div
                class="relative overflow-hidden bg-pallate-Dark_Sky_Blue bg-opacity-20 pt-3 rounded-lg mb-12 hover-grayscale-0 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div class="relative overflow-hidden px-6">
                  <img
                    src={helen}
                    class="max-w-full h-60
                     mx-auto rounded-lg bg-gray-50 "
                    alt="title image"
                  />
                </div>
                <div class="pt-6 text-center">
                  <p class="text-lg leading-normal text-white font-bold mb-1">
                    Helen Khoshdoost
                  </p>
                  <div class="">
                    <p class="text-white leading-relaxed font-light">
                      Back End Developer
                    </p>
                    <div className="flex flex-col justify-center items-center">
                    <a
                      href="https://github.com/helenAzad"
                      className="text-white hover:text-pallate-Dark_Sky_Blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default AboutUs;
