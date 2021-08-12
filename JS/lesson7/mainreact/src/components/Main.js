function Main() {
  return (
    <div className="main d-flex justify-content-center align-items-center">
      <div className="wrapper">
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces Get Started</p>

        <div className="button d-flex justify-content-center">
          <div className="start">
            <a href="#" className="get">
              Get Started
            </a>
          </div>
          <div className="tutorial">
            <a href="#" className="take">
              Take the Tutorial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
