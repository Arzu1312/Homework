import React from 'react'
import Camera from '../images/camera.jfif';
import boy from '../images/boy.jfif';
import tree from '../images/derevo.jfif';
import func from '../images/func.jpg';


var sekiller={
    camera:Camera,
    boy:boy,
    tree:tree,
    func:func,
}
const Information = () => {
    return (
        <div>
            <div className="navbarici">
                <div className="text-side">
                    <div className="gar-jew">
                        <div className="garden">Garden</div>
                        <div className="jewelry">Jewelry</div>
                    </div>
                    <h1 className="quiet">Quiet ingenuity :120,000 lunches and counting</h1>
                    <div className="line"></div>
                    <div className="author">
                       <div className="man">
                       <img  className="boy" src={sekiller.boy} alt="" /> <h6 className="names">Fanes Mimi</h6>
                       <p className="tarix"> May 20,2021  <span> 6 min read</span> </p>
                       </div>
                        <div className="icons">
                            <p className="heart" style={{"marginRight":"13px"}}><i class="fas fa-heart" style={{"marginRight":"5px"}}> </i> 733</p>
                            <p className="comment" style={{"marginRight":"13px"}}><i class="fas fa-comment" style={{"marginRight":"5px"}}></i>14</p>
                            <div class="dropdown">
                            <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="far fa-bookmark"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </div>

                            <div class="dropdown">
                                <button class="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i style={{"transform": "translate(-2px,0px"}} class="fas fa-share-alt"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </div>

                                <div class="dropdown" style={{"paddingLeft":"1px"}}>
                                    <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i style={{"transform": "translate(-3px,0px"}} class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="tranperent-center"></div>
                <img className="img-side" src={sekiller.camera} alt="" />
            </div>
       
       <div className="secondline">
           <div className="text-side1 col-md-5">
               <p className="lorem1">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti dolores necessitatibus suscipit accusantium dignissimos culpa cumque.
            <br /><br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal <a href="">distribution of letters.</a>
            <br /><br />
            
            1. We want everything to look good out of the box.
            <br /> 2.Really just the first reason, that's the whole point of the plugin.
         <br />  3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.
                </p>

                <h2 className="typography">Typography should be easy</h2>

                <p className="lorem1">So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.
                        <br /><br />
                    Something a wise person once told me about typography is:</p>
           <div className="sitat">
           <q>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</q>
           </div>
           <p className="lorem1">It's probably important that images look okay here by default as well:</p>
           <img className="derevo" src={sekiller.tree} alt="" />
           <p className="lorem2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente</p>
          <p className="lorem1">
          Now I'm going to show you an example of an unordered list to make sure that looks good, too:
            <br /><br />
           1. So here is the first item in this list.
            <br /> 2. In this example we're keeping the items short.
       <br />   3.  Later, we'll use longer, more complex list items.
           <br /><br /> And that's the end of this section.
          </p>
          <h2 className="typography">Code should look okay by default.</h2>
           <p className="lorem1">I think most people are going to use highlight.js or Prism or something if they want to style their code blocks but it wouldn't hurt to make them look okay out of the box, even with no syntax highlighting.
<br /><br />
What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
                <img className="func col-md-12" src={sekiller.func} alt="" />
           </div>
        
           <div className="item-side1 col-md-3">
               <div className="firstbox">
                   <div className="boxnav">
                       <h5 className="discover"> <img className="iconfoto" src="https://img.icons8.com/plasticine/100/000000/news.png"/>Discover more tags</h5>
                       <a className="view">View All</a>
                   </div>
                   <div className="tagbox">
                       <div className="boxses" style={{"width":"20%",}}>Sport(20)</div>
                       <div className="boxses">Design</div>
                       <div className="boxses">Beauty(3)</div>
                       <div className="boxses">Outdoors</div>
                       <div className="boxses" style={{"width":"19%",}}>Music (5)</div>
                       <div className="boxses">Computers</div>
                       <div className="boxses" style={{"width":"18%",}}>Cars(2)</div>
                       <div className="boxses">Graphic</div>
                       <div className="boxses">Lifestyle(17)</div>
                       <div className="boxses" style={{"width":"32%",}}>Electronics(12)</div>
                       <div className="boxses" style={{"width":"30%",}}>Typography(3)</div>
                       <div className="boxses" style={{"width":"19%",}}>More (14)</div>
                       <div className="boxses">Beauty</div>
                       <div className="boxses" style={{"width":"20%",}}>Books (7)</div>
                       <div className="boxses" style={{"width":"30%",}}>Automotive (9)</div>
                       <div className="boxses" style={{"width":"52%",}}>Life style and healthy(3)</div>
                   </div>
               </div>
           </div>
       </div>
       
        </div>
    )
}

export default Information