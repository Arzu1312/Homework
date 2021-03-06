import React from 'react';
import '../style/style.css';
import group from '../Group 1.png';
import bulb from '../lightbulb balloon 2.png';
import balon1 from '../baloon.png';
import balon2 from '../ballon.png';



const Service = () => {
    return (
       <div className="service">
           <div className="service-container">
               <div className="service-group">
                   <div className="service-title">
                       <h1>Find your next place to travel</h1>

                       <div className="service-items">
                           <div className="service-item">
                           <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M29.75 10.0312C28.951 10.8302 28.313 11.0938 27.0938 11.0938C24.6553 11.0938 22.8438 9.28219 22.8438 6.84375C22.8438 5.62453 23.1073 4.9865 23.9062 4.1875L20.7188 1L0 21.7188L3.1875 24.9062C3.9865 24.1073 4.62453 23.8438 5.84375 23.8438C8.28219 23.8438 10.0938 25.6553 10.0938 28.0938C10.0938 29.313 9.83025 29.951 9.03125 30.75L12.2188 33.9375L32.9375 13.2188L29.75 10.0312Z" stroke="#FBB667" stroke-width="2" stroke-miterlimit="10"/>
                           <path fill="currentColor" d="M13.2812 8.4375L15.4062 10.5625" stroke="#FBB667" stroke-width="2" stroke-miterlimit="10"/>
                           <path fill="currentColor" d="M23.375 18.5312L25.5 20.6562" stroke="#FBB667" stroke-width="2" stroke-miterlimit="10"/>
                           </svg>

                           </div>

                           <div className="service-text">
                               <h5>Ticket</h5>
                               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                           </div>
                       </div>

                       <div className="service-items">
                           <div className="service-item">
                           <svg width="30" height="30" viewBox="0 0 52 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill="currentColor" d="M50.2931 33.7351C48.9339 28.36 47.621 27.8452 43.2705 26.8927L42.5857 26.7228C39.7489 26.0895 34.6467 22.2642 32.9683 21.0028C31.1993 19.696 29.0564 18.9937 26.857 19H18.2539C16.0554 19 15.5509 19.2832 14.8558 19.9834L14.7735 20.0761L12.1323 23.7367C11.7822 24.0919 11.4887 24.4472 11.2261 24.7664C10.5826 25.549 10.1552 26.069 9.36752 26.2183L5.20238 26.7331C3.22535 27.109 2 28.2674 2 29.8119V37.2773C2 37.4821 2.08136 37.6785 2.22619 37.8234C2.37102 37.9682 2.56746 38.0495 2.77228 38.0495H6.68C6.91541 39.0708 7.49006 39.982 8.31012 40.6346C9.13019 41.2871 10.1472 41.6424 11.1952 41.6424C12.2433 41.6424 13.2603 41.2871 14.0804 40.6346C14.9004 39.982 15.4751 39.0708 15.7105 38.0495H33.4523C33.6877 39.0708 34.2623 39.982 35.0824 40.6346C35.9025 41.2871 36.9195 41.6424 37.9675 41.6424C39.0155 41.6424 40.0326 41.2871 40.8526 40.6346C41.6727 39.982 42.2474 39.0708 42.4828 38.0495H46.9414C47.4681 38.0484 47.9876 37.9272 48.4605 37.6951C48.9333 37.4631 49.347 37.1263 49.6702 36.7103C49.9933 36.2943 50.2174 35.8102 50.3253 35.2946C50.4332 34.7791 50.4222 34.2457 50.2931 33.7351ZM12.4206 25.7446C12.6832 25.4254 12.9354 25.0959 13.2701 24.7818L13.3267 24.6634L15.9679 21.0028C16.3026 20.6682 16.524 20.5189 18.2281 20.5189H26.8261C28.6938 20.5177 30.5119 21.119 32.0107 22.2333C34.2452 23.9117 36.1295 25.2143 37.7461 26.1822H12.0036L12.4206 25.7446ZM11.2004 40.109C10.5894 40.109 9.99218 39.9278 9.48418 39.5883C8.97618 39.2489 8.58024 38.7665 8.34643 38.202C8.11262 37.6375 8.05145 37.0164 8.17064 36.4172C8.28984 35.818 8.58405 35.2675 9.01607 34.8355C9.44809 34.4035 9.99851 34.1093 10.5977 33.9901C11.197 33.8709 11.8181 33.9321 12.3825 34.1659C12.947 34.3997 13.4295 34.7956 13.7689 35.3036C14.1083 35.8116 14.2895 36.4089 14.2895 37.0198C14.2895 37.8391 13.964 38.6249 13.3847 39.2042C12.8054 39.7835 12.0197 40.109 11.2004 40.109ZM37.9727 40.109C37.3617 40.109 36.7645 39.9278 36.2565 39.5883C35.7485 39.2489 35.3525 38.7665 35.1187 38.202C34.8849 37.6375 34.8237 37.0164 34.9429 36.4172C35.0621 35.818 35.3563 35.2675 35.7883 34.8355C36.2204 34.4035 36.7708 34.1093 37.37 33.9901C37.9692 33.8709 38.5904 33.9321 39.1548 34.1659C39.7193 34.3997 40.2017 34.7956 40.5412 35.3036C40.8806 35.8116 41.0618 36.4089 41.0618 37.0198C41.0618 37.8391 40.7363 38.6249 40.157 39.2042C39.5777 39.7835 38.792 40.109 37.9727 40.109ZM48.4499 35.7688C48.2717 35.9988 48.0429 36.1849 47.7814 36.3125C47.5198 36.4402 47.2324 36.506 46.9414 36.505H42.5703C42.4393 35.3761 41.898 34.3348 41.0494 33.579C40.2008 32.8231 39.104 32.4055 37.9675 32.4055C36.8311 32.4055 35.7343 32.8231 34.8857 33.579C34.037 34.3348 33.4958 35.3761 33.3648 36.505H15.798C15.667 35.3761 15.1257 34.3348 14.2771 33.579C13.4285 32.8231 12.3317 32.4055 11.1952 32.4055C10.0588 32.4055 8.96202 32.8231 8.11339 33.579C7.26476 34.3348 6.72348 35.3761 6.59248 36.505H3.54455V29.8119C3.54455 28.7256 5.03248 28.36 5.44436 28.2674L9.50139 27.7525H40.7374C41.2246 27.967 41.7293 28.1392 42.2459 28.2674L42.941 28.4218C46.8951 29.2868 47.6107 29.4515 48.7949 34.1315C48.865 34.4127 48.8704 34.7062 48.8106 34.9898C48.7509 35.2734 48.6275 35.5397 48.4499 35.7688Z" fill="#FBB667"/>
                           </svg>


                           </div>

                           <div className="service-text">
                               <h5>Driver</h5>
                               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                           </div>
                       </div>

                       <div className="service-items">
                           <div className="service-item">
                           <svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill="currentColor" d="M35.3423 25.2453L26.9099 11.8835L30.4702 6.32193C31.2613 5.08797 31.5762 3.6381 31.314 2.44264C31.1325 1.61802 30.7003 0.967113 30.0627 0.559612L29.8655 0.432181C28.236 -0.607887 25.8639 0.289625 24.4617 2.47656L21.1155 7.7067L2.50382 5.96898C2.24666 5.9456 1.99914 6.06615 1.86071 6.28343L0.481893 8.43966C0.368215 8.61705 0.342545 8.83661 0.411302 9.03509C0.48006 9.23357 0.636368 9.39034 0.835306 9.45955L16.5065 14.9083L10.592 24.1507L1.35144 25.0487C1.11033 25.0725 0.899479 25.2206 0.796343 25.4401L0.0656825 26.9885C-0.0259939 27.1829 -0.0214101 27.4093 0.0776004 27.5996C0.177069 27.7902 0.359963 27.9236 0.572194 27.9594L11.2296 29.7709L17.3384 38.6892C17.4599 38.8666 17.657 38.9771 17.872 38.9871C17.8834 38.9876 17.8944 38.9881 17.9059 38.9881C18.1085 38.9881 18.3015 38.8987 18.4321 38.7428L19.5341 37.4314C19.6899 37.2457 19.7367 36.9918 19.6569 36.7626L16.6004 27.9951L22.3591 18.9953L32.9243 28.2839C33.0747 28.4159 33.2745 28.4769 33.4739 28.448C33.6724 28.4201 33.8484 28.3068 33.9571 28.1386L35.34 25.9838C35.4835 25.7592 35.4844 25.4713 35.3423 25.2453ZM33.231 26.7231L22.6653 17.434C22.5149 17.3016 22.3165 17.2424 22.1152 17.2695C21.9167 17.2974 21.7407 17.4111 21.6321 17.5798L15.2615 27.5354C15.1478 27.7132 15.1222 27.9333 15.1914 28.1327L18.2295 36.8465L17.9614 37.1655L12.2357 28.8065C12.1844 28.7318 12.1188 28.6676 12.0427 28.6181L11.9446 28.5544C11.8663 28.5035 11.7783 28.4691 11.6861 28.4535L1.69615 26.7557L1.87354 26.3793L11.0581 25.4873C11.2681 25.4667 11.4574 25.3512 11.5711 25.1733L18.1346 14.9157C18.2479 14.7383 18.274 14.5187 18.2052 14.3198C18.1365 14.1208 17.9802 13.9645 17.7812 13.8953L2.10915 8.44653L2.79305 7.37713L21.4047 9.11485C21.6642 9.1396 21.9099 9.01722 22.0478 8.80086L25.6196 3.21823C26.5725 1.73124 28.1773 0.984532 29.1175 1.58593L29.3228 1.71886C29.7308 1.97922 29.9004 2.41652 29.9705 2.73738C30.1566 3.58402 29.9105 4.64654 29.3118 5.58027L25.516 11.5104C25.3725 11.735 25.3716 12.0224 25.5137 12.2479L33.9456 25.6097L33.231 26.7231Z" fill="#FBB667"/>
                           </svg>


                           </div>

                           <div className="service-text">
                               <h5>Tour</h5>
                               <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                           </div>
                       </div>
                   </div>

                   <div className="service-image">
                       <img src={group}  className="travel"/>
                   </div>
               </div>

               <div className="service-travel">
                   <div className="balon-image">
                       <img src={bulb} className="bulb" />
                   </div>
                   <div className="balon">
                       <div className="balon-title">
                           <h1>BYE BYE TRAVEL</h1>
                           <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                           <div className="start">
                           <a href="#"> Get Started</a>
                           </div>
                           <div className="balons">
                               <img src={balon1} className="balon1" />
                               <img src={balon2} className="balon2" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           
       </div>
    )
}

export default Service
