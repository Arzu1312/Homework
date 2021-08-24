import React from "react";
import "../styles/style.css";
import img2 from "../Album2.png";
function Library() {
  return (
    <div className="container">
      <div className="library-box">
        <div className="image2">
          <img src={img2} />
        </div>
        <div className="library-title">
          <div className="down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#797C7F" }}
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-down"
              class="svg-inline--fa fa-arrow-down fa-w-14"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
              />
            </svg>
          </div>

          <div className="fav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#EC540E" }}
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              />
            </svg>
          </div>
        </div>

        <div className="music-list">
          <div className="list">
            <div className="music-artist">
              <h5>Legends Never Die</h5>
              <h6>Against the Current</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Legends Never Die</h5>
              <h6>Against the Current</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Legends Never Die</h5>
              <h6>Against the Current</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list orange">
            <div className="music-artist">
              <h5>The monster</h5>
              <h6>Eminem/ Rihanna</h6>
            </div>

            <div className="music-pause">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="pause"
                class="svg-inline--fa fa-pause fa-w-14"
                role="img"
                viewBox="0 0 448 512"
                style={{ color: "#797C7F" }}
              >
                <path
                  fill="currentColor"
                  d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
                />
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Rap god</h5>
              <h6>Eminem</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Loyal</h5>
              <h6>Odezsa</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Loser</h5>
              <h6>Bigbang</h6>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>

          <div className="list">
            <div className="music-artist">
              <h5>Five hundred miles</h5>
            </div>

            <div className="music-play">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ color: "#797C7F" }}
              >
                <path fill="currentColor" d="M7 6v12l10-6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
