import React, { Component } from 'react';
import top1 from "../images/top1.jpg";
import top2 from "../images/top2.jpg";
import { Link } from "react-router-dom";
import './navbar.css';
class navbar extends Component {
    render() {
        return (
            <div>
                <div className="header" id="home">
	<div className="container">
		<ul>
		    <li> <Link to="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Sign In </Link></li>
			<li> <Link to="#" data-toggle="modal" data-target="#myModal2"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Up </Link></li>
			<li><i className="fa fa-phone" aria-hidden="true"></i> Call : 01234567898</li>
			<li><i className="fa fa-envelope-o" aria-hidden="true"></i> <Link to="mailto:info@example.com">info@example.com</Link></li>
		</ul>
	</div>
</div>

            <div className="header-bot">
            <div className="header-bot_inner_wthreeinfo_header_mid">
            <div className="col-md-4 header-middle">
                    <form action="#" method="post">
                            <input type="search" name="search" placeholder="Search here..." required=""/>
                            <input type="submit" value=" "/>
                        <div className="clearfix"></div>
                    </form>
                </div>
                
                    <div className="col-md-4 logo_agile">
                        <h1><Link to="index.html"><span>E</span>lite Shoppy <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i></Link></h1>
                    </div>
                
                <div className="col-md-4 agileits-social top_content">
                                <ul className="social-nav model-3d-0 footer-social w3_agile_social">
                                                                   <li className="share">Share On : </li>
                                                                    <li><Link to="#" className="facebook">
                                                                          <div className="front"><i className="fab fa-facebook" aria-hidden="true"></i></div>
                                                                          <div className="back"><i className="fab fa-facebook" aria-hidden="true"></i></div></Link></li>
                                                                    <li><Link to="#" className="twitter"> 
                                                                          <div className="front"><i className="fab fa-twitter" aria-hidden="true"></i></div>
                                                                          <div className="back"><i className="fab fa-twitter" aria-hidden="true"></i></div></Link></li>
                                                                    <li><Link to="#" className="instagram">
                                                                          <div className="front"><i className="fab fa-instagram" aria-hidden="true"></i></div>
                                                                          <div className="back"><i className="fab fa-instagram" aria-hidden="true"></i></div></Link></li>
                                                                    <li><Link to="#" className="pinterest">
                                                                          <div className="front"><i className="fab fa-linkedin" aria-hidden="true"></i></div>
                                                                          <div className="back"><i className="fab fa-linkedin" aria-hidden="true"></i></div></Link></li>
                                                                </ul>
        
        
        
                </div>
                <div className="clearfix"></div>
            </div>
            </div>
            <div className= " ban-top">
                   <div className="container">
                <div className="top_nav_left">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                       
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                        </div>
                        
                        <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav menu__list">
                            <li className="active menu__item menu__item--current"><Link className="menu__link" to="index.html">Home <span className="sr-only">(current)</span></Link></li>
                            <li className=" menu__item"><Link className="menu__link" to="about.html">About</Link></li>
                            <li className="dropdown menu__item">
                                <Link to=""   className="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      Men's wear <span className="caret"></span></Link>
                                    <ul className="dropdown-menu multi-column columns-3">
                                        <div className="agile_inner_drop_nav_info">
                                            <div className="col-sm-6 multi-gd-img1 multi-gd-text ">
                                                <Link to="mens.html"><img src={top2} alt=" "/></Link>
                                            </div>
                                            <div className="col-sm-3 multi-gd-img">
                                                <ul className="multi-column-dropdown "  >
                                                    <li><Link  to="mens.html">Clothing</Link></li>
                                                    <li><Link  to="mens.html">Wallets</Link></li>
                                                    <li><Link  to="mens.html">Footwear</Link></li>
                                                    <li><Link  to="mens.html">Watches</Link></li>
                                                    <li><Link  to="mens.html">Accessories</Link></li>
                                                    <li><Link  to="mens.html">Bags</Link></li>
                                                    <li><Link  to="mens.html">Caps & Hats</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="mens.html">Jewellery</Link></li>
                                                    <li><Link to="mens.html">Sunglasses</Link></li>
                                                    <li><Link to="mens.html">Perfumes</Link></li>
                                                    <li><Link to="mens.html">Beauty</Link></li>
                                                    <li><Link to="mens.html">Shirts</Link></li>
                                                    <li><Link to="mens.html">Sunglasses</Link></li>
                                                    <li><Link to="mens.html">Swimwear</Link></li>
                                                </ul>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </ul>
                            </li>
                            <li className="dropdown menu__item">
                                <Link to="#" className="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Women's wear <span className="caret"></span></Link>
                                    <ul className="dropdown-menu multi-column columns-3">
                                        <div className="agile_inner_drop_nav_info">
                                            <div className="col-sm-3 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="womens.html">Clothing</Link></li>
                                                    <li><Link to="womens.html">Wallets</Link></li>
                                                    <li><Link to="womens.html">Footwear</Link></li>
                                                    <li><Link to="womens.html">Watches</Link></li>
                                                    <li><Link to="womens.html">Accessories</Link></li>
                                                    <li><Link to="womens.html">Bags</Link></li>
                                                    <li><Link to="womens.html">Caps & Hats</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="womens.html">Jewellery</Link></li>
                                                    <li><Link to="womens.html">Sunglasses</Link></li>
                                                    <li><Link to="womens.html">Perfumes</Link></li>
                                                    <li><Link to="womens.html">Beauty</Link></li>
                                                    <li><Link to="womens.html">Shirts</Link></li>
                                                    <li><Link to="womens.html">Sunglasses</Link></li>
                                                    <li><Link to="womens.html">Swimwear</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 multi-gd-img multi-gd-text ">
                                                <Link to="womens.html"><img src={top1} alt=" "/></Link>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </ul>
                            </li>
                            <li className="menu__item dropdown">
                               <Link className="menu__link" to="#"  data-toggle="dropdown">Short Codes <b className="caret"></b></Link>
                                        <ul className="dropdown-menu agile_short_dropdown">
                                            <li><Link to="icons.html">Web Icons</Link></li>
                                            <li><Link to="typography.html">Typography</Link></li>
                                        </ul>
                            </li>
                            <li className=" menu__item"><Link className="menu__link" to="contact.html">Contact</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>	
                </div>
                <div className="top_nav_right">
                    <div className="wthreecartaits wthreecartaits2 cart cart box_1"> 
                                <form action="#" method="post" className="last"> 
                                <input type="hidden" name="cmd" value="_cart"/>
                                <input type="hidden" name="display" value="1"/>
                                <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            </form>  
          
                                </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
        </div>
        
                );
             
          }
      }
export default navbar;