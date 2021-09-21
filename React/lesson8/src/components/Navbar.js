import React from 'react';
import '../styles/style.css';
import Search from '../components/Search';
import profile from '../profile.png';
import axios from 'axios';


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);

    this.state = {
        users: []
    }
}

searchUsers(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res => this.setState({users: res.data.items}));
}
   

   render() {
    return (
          <div className="header">
              <header>
              <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href={this.props.url}>
          <i className="fab fa-github"></i>
          </a>
        <Search searchUsers={this.searchUsers} />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pull requests</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Issues</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Marketplace</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Explore</a>
              </li>
              
            </ul>

            <div className="header-item ">
                <div className="notification">
                    <a href="#">
                    <i className="far fa-bell"></i>
                    </a>
                </div>

                <div className="details dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-plus"></i>
                </a>
               
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">New repository</a></li>
                  <li><a className="dropdown-item" href="#">Import repository</a></li>
                  <li><a className="dropdown-item" href="#">New gist</a></li>
                  <li><a className="dropdown-item" href="#">New organization</a></li>
                  <li><a className="dropdown-item" href="#">New project</a></li>

                </ul>
                </div>

                <div className="profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile} className="prof-img" />
                </a>
                  
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li><button className="dropdown-item" type="button">Signed in as  
                   <span> Arzu1312</span>
                  </button></li>
                   <div className="dropdown-divider"></div>
                  <li><div className="user-status">
                    <div className="emoji-set">
                       <div className="emoji">
                       <i className="far fa-smile"></i>
                       </div>

                       <div className="status-message">Set status</div>
                    </div>
                    </div></li>
                  <div className="dropdown-divider"></div>
                  <li><button className="dropdown-item" type="button">Your profile</button></li>
                  <li><button className="dropdown-item" type="button">Your repositories</button></li>
                  <li><button className="dropdown-item" type="button">Your codespaces</button></li>
                  <li><button className="dropdown-item" type="button">Your projects</button></li>
                  <li><button className="dropdown-item" type="button">Your stars</button></li>
                  <li><button className="dropdown-item" type="button">Your gists</button></li>
                  <div className="dropdown-divider"></div>
                  <li><button className="dropdown-item" type="button">Upgrade</button></li>
                  <li><button className="dropdown-item" type="button">Feature preview</button></li>
                  <li><button className="dropdown-item" type="button">Help </button></li>
                  <li><button className="dropdown-item" type="button">Settings</button></li>
                  <div className="dropdown-divider"></div>
                  <li><button className="dropdown-item" type="button">Sign out</button></li>

                </ul>
                </div>
            </div>
           
          </div>
        </div>
      </nav>
              </header>
          </div>
        )
   }
}

export default Navbar;
