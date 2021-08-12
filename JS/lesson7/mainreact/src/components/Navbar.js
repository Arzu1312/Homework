import logo from "../logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} />
          <span>React</span>
        </div>
        <ul>
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
          <li>Community</li>
        </ul>

        <form
          action="GET"
          class="d-flex align-items-center text-white position-relative"
        >
          <div className="search-icon position-absolute">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input type="text" placeholder="Search" />
        </form>

        <div className="box">
          <a href="#">v17.0.2</a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            Languages
          </a>

          <a href="#">
            GitHub
            <svg
              x="0px"
              y="0px"
              stroke="currentColor"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              fill="none"
            >
              <path
                fill="currentColor"
                d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
              ></path>
              <polygon
                fill="currentColor"
                points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
              ></polygon>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
