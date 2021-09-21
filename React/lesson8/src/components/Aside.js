import React from 'react';
import '../styles/style.css';
import Users from '../components/Users';
import axios from 'axios'


class Aside extends React.Component {

    
    render() {
        return (
           <div className="application-main">
             <div className="repo">
                <div className="sidebar-left">
                   <div className="repo-container">
                   <div className="repo-details">
                        <h2>
                            Repositories
                            <a href="#" className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 16" style={{"color": "#fff", "marginRight":"5px"}}>
                                <path fill="currentColor" fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg> 
                                 New
                            </a>
                        </h2>
                        <div className="input-group mt-2 mb-3">
                        <input type="text" className="form-control" placeholder="Find a repository..." />
                         </div>

                         <div className="repo-filter">
                         <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 16" style={{"color": "#57606a", "marginRight":"8px"}}>
                                <path fill="currentColor" fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg> 
                             Arzu1312/Homework</a>
                         </div>
                         
                    </div>

                    <div className="recent">
                        <h2>Recent activity</h2>
                       <div className="note">
                       <p>When you take actions across GitHub, we’ll provide links to that activity here.</p>
                       </div>
                    </div>
                   </div>
                </div>
                 <div className="sidebar-right">
                  <div className="gutter">
                      <div className="center-item">
                          <div className="main">
                              <div className="item">
                                  <div className="news">
                                      <h2>All activity</h2>

                                      <Users users={this.state.users}/>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                       <div className="right">
                           <h2>Explore repositories</h2>
                           <div className="text-item">
                               <a href="#">reactjs/az.reactjs.org</a>

                               <p>
                                   <span>AZ </span> React documentation website in Azerbaijani
                               </p>

                               <span className="color-text">
                                   <span>
                                       <span className="language-color" style={{"backgroundColor":"#f1e05a"}}></span>
                                       <span className="programming">JavaScript</span>
                                   </span>
                               </span>

                               <span className="star">
                               <i className="far fa-star"></i> 30
                               </span>
                           </div>

                           <div className="text-item">
                               <a href="#">Uniswap/uniswap-interface</a>

                               <p>
                                   <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="-26 0 512 512.10124" width="20px"><path d="m105.621094 118.8125c-1.40625 6.886719-.726563 14.039062 1.945312 20.539062.292969.699219.753906 1.28125 1.085938 1.953126-5.121094 6.777343-9.480469 13.722656-13.714844 20.480468-9.328125 17.878906-23.050781 33.09375-39.875 44.210938-40.105469 24.082031-41.871094 37.128906-30.53125 59.042968l1.707031 3.285157c6.824219 13.738281 22.945313 45.894531 47.785157 49.921875 1.71875.28125 3.457031.421875 5.195312.425781 11.171875-.539063 21.640625-5.589844 29.015625-13.996094 27.117187-27.117187 48.023437-36.617187 70.953125-39.253906.128906 1.613281.71875 3.15625 1.707031 4.4375.238281.300781 23.175781 29.433594 8.140625 49.496094-25.410156 15.863281-44.96875 39.566406-55.730468 67.523437-12.800782 34.484375-7.84375 83.105469 26.359374 109.320313 15.964844 11.230469 35.230469 16.789062 54.722657 15.785156 1.972656 0 4.164062-.230469 6.214843-.304687.457032.140624.929688.246093 1.40625.304687.984376-.007813 1.960938-.1875 2.886719-.527344 2.039063-.128906 3.921875-.101562 6.03125-.300781 10.40625-.847656 20.734375-2.503906 30.882813-4.957031 9.96875-1.929688 19.613281-5.273438 28.636718-9.933594 12.066407 4.265625 24.804688 6.320313 37.597657 6.058594 6.324219 0 12.296875-.363281 17.605469-.851563 25.371093-1.050781 50.132812-8.085937 72.269531-20.53125 23.84375-14.328125 39.53125-39.070312 42.316406-66.746094.128906-1.453124.222656-2.902343.265625-4.363281v-.09375c.085938-4.6875-3.632812-8.570312-8.320312-8.6875-2.257813-.140625-4.472657.65625-6.125 2.195313-1.652344 1.542968-2.597657 3.695312-2.613282 5.957031-.199218.527344-2.167968 4.792969-15.589844 12.167969-11.648437 6.179687-25.601562 6.199218-37.265624.050781-3.996094-2.167969-6.597657-4.8125-6.957032-7.082031-.113281-1.621094.140625-3.246094.742188-4.753906 4.082031-9.441407 10.160156-17.882813 17.820312-24.746094 2.949219-3.117188 5.894532-6.203125 8.601563-9.386719 8.945312-10.277344 17.148437-21.179687 24.550781-32.625 18.570312-28.441406 27.402344-62.148437 25.15625-96.042969-7.929688-103.074218-123.605469-142.453125-153.34375-150.910156 2.921875-10.109375 2.621094-20.875-.855469-30.804688-1.132812-2.832031-3.695312-4.84375-6.714843-5.273437-26.496094-3.789063-44.179688 1.707031-55.902344 9.847656-12.3125-12.839843-28.988282-20.601562-46.738282-21.761719-17.921874-.324218-35.402343 5.550782-49.492187 16.632813l-128.851563-63.121094c-5.734374-2.9375-12.757812-1.101562-16.316406 4.265625-3.59375 5.203125-2.777344 12.265625 1.910156 16.511719zm92.222656 145.636719c24.773438-1.574219 48.476562-10.675781 67.941406-26.085938-.890625 5.050781-2.167968 10.027344-3.824218 14.882813-8.839844 24.179687-27.234376 43.660156-50.867188 53.871094.136719-15.253907-4.496094-30.171876-13.25-42.667969zm60.074219 225.136719c-9.40625 2.261718-18.972657 3.796874-28.613281 4.589843-1.144532.101563-2.191407.136719-3.3125.214844-10.613282-15.496094-45.226563-74.171875 2.050781-121.4375 3.234375-3.347656 3.1875-8.671875-.105469-11.964844-3.292969-3.289062-8.613281-3.335937-11.960938-.101562-48.417968 48.417969-24.6875 107.21875-9.746093 133.691406-13.019531-.285156-25.664063-4.445313-36.308594-11.945313-27.308594-20.949218-31.085937-61.929687-20.738281-89.847656 9.707031-25.046875 27.429687-46.175781 50.40625-60.085937 5.46875-3.457031 11.152344-6.554688 17.015625-9.28125 28.625-11.957031 50.914062-35.378907 61.441406-64.554688 17.253906-49.179687-1.800781-104.449219-10.699219-125.773437 4.007813-1.503906 7.914063-3.273438 11.6875-5.300782 33.121094 15.359376 59.515625 42.257813 74.242188 75.664063 10.089844 22.007813 14.550781 46.183594 12.96875 70.339844-3.359375 37.164062-29.34375 56.082031-59.425782 77.988281-16.132812 10.867188-29.988281 24.78125-40.789062 40.960938-10.703125 18.964843-13.726562 41.308593-8.445312 62.4375 1.582031 11.503906 6.871093 22.179687 15.066406 30.402343-4.820313 1.65625-9.8125 2.859375-14.734375 4.003907zm185.539062-241.492188c1.953125 30.230469-5.96875 60.277344-22.570312 85.613281-6.964844 10.773438-14.6875 21.039063-23.109375 30.71875-2.5 2.945313-5.222656 5.804688-7.960938 8.679688-9.480468 8.621093-16.882812 19.285156-21.648437 31.179687-1.488281 4.070313-1.964844 8.4375-1.390625 12.734375 1.882812 8.566407 7.683594 15.75 15.65625 19.402344 16.785156 8.839844 36.851562 8.800781 53.601562-.101563l.851563-.476562c-6.238281 12.695312-15.980469 23.335938-28.074219 30.667969-9.175781 5.566406-19.136719 9.714843-29.550781 12.304687-1.78125-.917968-3.828125-1.167968-5.777344-.707031-11.253906 2.597656-23.082031.101563-32.324219-6.828125-10.8125-10.128906-13.722656-30.925781-8.40625-60.132812.546875-3-.550781-6.0625-2.875-8.035157-2.324218-1.972656-5.527344-2.554687-8.398437-1.527343-2.871094 1.027343-4.972657 3.507812-5.519531 6.507812-6.492188 35.695312-1.9375 61.148438 13.535156 75.648438.597656.554687 1.226562.996093 1.832031 1.507812-15.527344 1.199219-31.0625-2.234375-44.636719-9.871094-7.074218-5.765625-11.523437-14.140625-12.339844-23.230468-4.402343-16.953126-2.203124-34.949219 6.152344-50.34375 9.671875-14.292969 22.011719-26.582032 36.34375-36.191407 30.636719-22.304687 62.292969-45.378906 66.390625-90.238281 1.914063-27.082031-3.035156-54.207031-14.398437-78.867188-15.246094-34.117187-41.316406-62.25-74.179688-80.042968 1.578125-1.609375 3.050782-3.320313 4.414063-5.121094 19.070312 5.25 137.042969 41.304688 144.382812 136.75zm-204.988281-144c.273438-1.367188 7.039062-32.164062 53.113281-28.015625 1.203125 6.695313.261719 13.597656-2.6875 19.726563-5.367187 10.71875-17.324219 18.773437-35.542969 24.007812-2.441406.695312-4.441406 2.445312-5.464843 4.769531-1.019531 2.324219-.953125 4.980469.183593 7.253907 11.726563 25.269531 18.457032 52.570312 19.8125 80.398437-18.085937 21.148437-44.105468 33.890625-71.902343 35.21875-33.789063 0-62.292969 7.550781-99.898438 45.167969-4.601562 5.953125-11.855469 9.246094-19.371093 8.789062-16.210938-2.628906-30.019532-30.292968-35.226563-40.707031l-1.789063-3.503906c-6.351562-12.253907-8.722656-16.847657 24.148438-36.566407 19.175781-12.449218 34.859375-29.582031 45.566406-49.785156 3.414063-5.460937 6.828125-10.65625 10.410156-15.726562 8.953126 7.066406 19.296876 12.160156 30.355469 14.949218.445313.160157.902344.289063 1.363281.386719v-.078125c.5625.132813 1.132813.222656 1.707032.265625 3.414062 0 6.5-2.035156 7.847656-5.171875 1.34375-3.140625.6875-6.777344-1.667969-9.25-.636719-1.925781-1.15625-3.882812-1.554687-5.871094-1.417969-5.402343-.929688-11.128906 1.382812-16.214843 8.40625-17.738281 30.386719-25.410157 67.722656-23.363281.785157 0 1.558594.070312 2.34375.136718 4.34375.398438 8.289063-2.542968 9.148438-6.816406zm-42.519531-39.167969c13.417969.941407 26.011719 6.8125 35.359375 16.484375-2.863282 3.726563-5.257813 7.789063-7.125 12.101563-18.941406-.90625-63.949219-1.238281-80.316406 33.277343-3.128907 6.691407-4.378907 14.109376-3.609376 21.453126-7.9375-3.15625-14.269531-9.382813-17.558593-17.269532-3.746094-12.867187 8.574219-28.671875 19.566406-39.664062 17.570313-17.570313 34.984375-26.453125 51.753906-26.453125.683594.027343 1.289063.042969 1.929688.070312zm-62.796875 11.59375c-.984375.941407-1.972656 1.777344-2.953125 2.757813-6.871094 6.675781-12.847657 14.214844-17.785157 22.425781l-76.433593-72.789063zm0 0"/><path d="m67.964844 247.453125c0-3.453125-2.078125-6.5625-5.269532-7.882813-3.1875-1.320312-6.855468-.589843-9.296874 1.847657-4.089844 3.679687-5.574219 9.449219-3.761719 14.644531 3.496093 8.449219 14.667969 8.449219 18.335937 8.449219 4.714844 0 8.535156-3.820313 8.535156-8.535157 0-4.710937-3.820312-8.53125-8.535156-8.53125zm0 0"/><path d="m202.433594 145.292969c-12.023438 2.117187-22.574219 9.253906-29.015625 19.625-4.175781 7.824219-5.097657 16.980469-2.558594 25.480469.496094 1.464843 1.378906 2.765624 2.558594 3.761718 3.832031 2.992188 8.578125 4.5625 13.433593 4.449219 4.535157-.0625 8.996094-1.1875 13.023438-3.277344 4.222656-2.136719 5.914062-7.289062 3.777344-11.511719-2.132813-4.222656-7.289063-5.917968-11.511719-3.78125-1.753906.886719-3.675781 1.40625-5.640625 1.527344-.171875-3.003906.5-5.996094 1.9375-8.636718 4.289062-6 10.832031-10.003907 18.125-11.09375 4.574219-1.140626 7.355469-5.777344 6.214844-10.347657-1.144532-4.574219-5.777344-7.355469-10.351563-6.214843zm0 0"/><path d="m298.808594 315.71875c1.546875 0 3.0625-.421875 4.386718-1.21875 1.980469-1.1875 48.222657-30.0625 20.769532-112.410156-1.488282-4.476563-6.324219-6.898438-10.804688-5.410156-4.476562 1.488281-6.898437 6.324218-5.410156 10.800781 22.855469 68.542969-11.765625 91.386719-13.414062 92.417969-3.269532 1.992187-4.8125 5.921874-3.769532 9.609374 1.039063 3.683594 4.410156 6.226563 8.242188 6.210938zm0 0"/></svg>
                                       </span>  An open source interface for the Uniswap protocol
                               </p>

                               <span className="color-text">
                                   <span>
                                       <span className="language-color" style={{"backgroundColor":"#2b7489"}}></span>
                                       <span className="programming">TypeScript</span>
                                   </span>
                               </span>

                               <span className="star">
                               <i className="far fa-star"></i> 2.4k
                               </span>
                           </div>

                           <div className="text-item">
                               <a href="#">oss-review-toolkit/ort</a>

                               <p>
                               A suite of tools to assist with reviewing Open Source Software dependencies.
                               </p>

                               <span className="color-text">
                                   <span>
                                       <span className="language-color" style={{"backgroundColor":"#a97bff"}}></span>
                                       <span className="programming">Kotlin</span>
                                   </span>
                               </span>

                               <span className="star">
                               <i className="far fa-star"></i> 526
                               </span>
                           </div>

                           <div className="explore">
                               <a href="#">Explore more →</a>
                           </div>
                       </div>
                  </div>
                 </div>
            </div>
           </div>
            )

    }
   
}

export default Aside;

