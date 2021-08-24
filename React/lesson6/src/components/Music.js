import React from "react";
import "../styles/style.css";
import img1 from "../Album.png";

function Music() {
  return (
    <div className="container">
      <div className="music-box">
        <div className="title">
          <div className="back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              style={{ color: "#797C7F" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              class="svg-inline--fa fa-chevron-left fa-w-10"
              role="img"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              />
            </svg>
          </div>
          <h5>THE MONSTER</h5>
          <div className="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              style={{ color: "#797C7F" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </div>
        </div>
        <div className="artist">Eminem/ Rihanna</div>

        <div className="image">
          <img src={img1} />
        </div>

        <div className="word">
          <h5>And you think I'm crazy</h5>
          <h3>Yeah, you think I'm crazy</h3>
          <h4>Well,that's not fair</h4>
          <h6>Well,that's not fair</h6>
        </div>

        <div className="time">
          <span>00:48</span>
          <svg
            width="254"
            height="17"
            viewBox="0 0 254 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="6"
              width="247"
              height="5"
              rx="2.5"
              fill="#111216"
              stroke="url(#paint0_linear)"
              stroke-width="2"
            />
            <g filter="url(#filter0_f)">
              <rect
                x="6"
                y="6"
                width="88"
                height="5"
                rx="2.5"
                fill="url(#paint1_linear)"
              />
            </g>
            <rect
              x="6"
              y="6"
              width="86"
              height="5"
              rx="2.5"
              fill="url(#paint2_linear)"
            />
            <g filter="url(#filter1_f)">
              <path
                d="M16 6H247"
                stroke="url(#paint3_linear)"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="0.563437"
                y="0.563437"
                width="98.8731"
                height="15.8731"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2.71828"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter1_f"
                x="13.6409"
                y="3.64086"
                width="235.718"
                height="4.71828"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="0.67957"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="9.43237"
                y1="6.13896"
                x2="9.43237"
                y2="11"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stop-color="#383B46" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="6"
                y1="6.79206"
                x2="33.8804"
                y2="6.79206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DC4D0B" />
                <stop offset="1" stop-color="#BD2510" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="6"
                y1="8.06708"
                x2="77.1075"
                y2="8.06708"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF611A" />
                <stop offset="1" stop-color="#CB340D" />
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="247"
                y1="5.5"
                x2="16"
                y2="5.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EF622B" stop-opacity="0.01" />
                <stop
                  offset="0.499946"
                  stop-color="#F75D17"
                  stop-opacity="0.304578"
                />
                <stop offset="1" stop-color="#FF5802" stop-opacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
          <span>03:54</span>
        </div>

        <div className="player-buton">
          <div className="left-play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ color: "#797C7F" }}
            >
              <path
                fill="currentColor"
                d="M4 6h2v12H4zm10 7h6v-2h-6V6l-6 6 6 6z"
              ></path>
            </svg>
          </div>

          <div className="play-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style={{ color: "#fff" }}
            >
              <path fill="currentColor" d="M7 6v12l10-6z"></path>
            </svg>
          </div>

          <div className="right-play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ color: "#797C7F" }}
            >
              <path
                fill="currentColor"
                d="M18 6h2v12h-2zm-8 5H4v2h6v5l6-6-6-6z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="slideup">
          <svg
            width="40"
            height="7"
            viewBox="0 0 40 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6L20 1L39 6"
              stroke="#2D2E32"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p>Pull up the song list</p>
      </div>
    </div>
  );
}

export default Music;
