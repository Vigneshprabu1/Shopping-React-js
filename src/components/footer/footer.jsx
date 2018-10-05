import React,{ Component } from "react";
import {Link} from "react-router-dom";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

class footer extends Component{
    render(){
        return(
            <div className="footer">
	<div className="footer_agile_inner_info_w3l">
		<div className="col-md-3 footer-left">
			<h2><Link to="index.html"><span>S</span>mart Shopping </Link></h2>
			<p>Lorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non 
			numquam eius modi tempora.</p>
			<ul className="social-nav model-3d-0 footer-social w3_agile_social two">
															<li><Link to="" className="google-plus">
																<div className="front"><i className="fab fa-google" aria-hidden="true"></i></div>
																<div className="back"><i className="fab fa-google" aria-hidden="true"></i></div></Link></li>
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
		<div className="col-md-9 footer-right">
			<div className="sign-grds">
				<div className="col-md-4 sign-gd">
					<h4>Our <span>Information</span> </h4>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to={"/men"}>Men's Wear</Link></li>
						<li><Link to={"/women"}>Women's wear</Link></li>
						<li><Link to="about.html">About</Link></li>
						<li><Link to="typography.html">Short Codes</Link></li>
						<li><Link to={"/contact"}>Contact</Link></li>
					</ul>
				</div>
				
				<div className="col-md-5 sign-gd-two">
					<h4>Store <span>Information</span></h4>
					<div className="w3-address">
						<div className="w3-address-grid">
							<div className="w3-address-left">
								<i className="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div className="w3-address-right">
								<h6>Phone Number</h6>
								<p>+1 234 567 8901</p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3-address-grid">
							<div className="w3-address-left">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</div>
							<div className="w3-address-right">
								<h6>Email Address</h6>
								<p>Email :<Link to="mailto:example@email.com"> mail@example.com</Link></p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="w3-address-grid">
							<div className="w3-address-left">
								<i className="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div className="w3-address-right">
								<h6>Location</h6>
								<p>Broome St, NY 10002,California, USA. 
								
								</p>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				{/* <div className="col-md-3 sign-gd flickr-post">
					<h4>Flickr <span>Posts</span></h4>
					<ul>
						<li><Link to="single.html"><img src={t1} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t2} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t3} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t4} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t1} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t2} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t3} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t2} alt=" " className="img-responsive" /></Link></li>
						<li><Link to="single.html"><img src={t4} alt=" " className="img-responsive" /></Link></li>
					</ul>
				</div> */}
				<div className="clearfix"></div>
			</div>
		</div>
		<div className="clearfix"></div>
			<div className="agile_newsletter_footer">
					<div className="col-sm-6 newsleft">
				<h3>SIGN UP FOR NEWSLETTER !</h3>
			</div>
			<div className="col-sm-6 newsright">
				<form action="#" method="post">
					<input type="email" placeholder="Enter your email..." name="email" required=""/>
					<input type="submit" value="Submit"/>
				</form>
			</div>

		<div className="clearfix"></div>
	</div>
		<p className="copy-right">&copy 2018 SmartShopping. All rights reserved | Design by <Link to="Shinelogics.com/">Shinelogics</Link></p>
	</div>
</div>



        );

    }


}
export default footer;