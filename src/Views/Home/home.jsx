import React, { Component } from 'react';


import Bottom1 from "../../components/images/bottom1.jpg";
import Bottom2 from "../../components/images/bottom2.jpg";
import Bottom3 from "../../components/images/bottom3.jpg";
import Bottom4 from "../../components/images/bottom4.jpg";
import Mid from "../../components/images/mid.jpg";
import BB1 from '../../components/images/bb1.jpg';
import Bot_1 from '../../components/images/bot_1.jpg';
import Bot_2 from '../../components/images/bot_2.jpg';
import M1 from '../../components/images/m1.jpg';
import M2 from '../../components/images/m2.jpg';
import M3 from '../../components/images/m3.jpg';
import M4 from '../../components/images/m4.jpg';
import M5 from '../../components/images/m5.jpg';
import M6 from '../../components/images/m6.jpg';
import M7 from '../../components/images/m7.jpg';
import M8 from '../../components/images/m8.jpg';
// import W1 from '../../components/images/w1.jpg';
// import W2 from '../../components/images/w2.jpg';
// import W3 from '../../components/images/w3.jpg';
// import W4 from '../../components/images/w4.jpg';
// import W5 from '../../components/images/w5.jpg';
// import W6 from '../../components/images/w6.jpg';
// import W7 from '../../components/images/w7.jpg';
// import W8 from '../../components/images/w8.jpg';
import './home.css';
class home extends Component {
    render() {
        return (
            <div>
                {/* ----- banner ----- */}

                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* ---Indicators---- */}

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="4" className=""></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div className="item item2">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h3>Summer <span>Collection</span></h3>
                                    <p>New Arrivals On Sale</p>
                                    <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div className="item item3">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div className="item item4">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h3>Summer <span>Collection</span></h3>
                                    <p>New Arrivals On Sale</p>
                                    <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div className="item item5">
                            <div className="container">
                                <div className="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a className="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    {/*  ----The Modal----  */}

                </div>
                {/* ---- //banner --*/}
                {/*-----728x90--- */}
                <div className="banner_bottom_agile_info">
                    <div className="container">
                        <div className="banner_bottom_agile_info_inner_w3ls">
                            <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                                <figure className="effect-roxy">
                                    <img src={Bottom1} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>F</span>all Ahead</h3>
                                        <p>New Arrivals</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                                <figure className="effect-roxy">
                                    <img src={Bottom2} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>F</span>all Ahead</h3>
                                        <p>New Arrivals</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                {/* schedule-bottom  */}

                <div className="schedule-bottom">
                    <div className="col-md-6 agileinfo_schedule_bottom_left">
                        <img src={Mid} alt=" " className="img-responsive" />
                    </div>
                    <div className="col-md-6 agileits_schedule_bottom_right">
                        <div className="w3ls_schedule_bottom_right_grid">
                            <h3>Save up to <span>50%</span> in this week</h3>
                            <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
					Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i className="fab fa-user-o" aria-hidden="true"></i>
                                <h4>Customers</h4>
                                <h5 className="counter">653</h5>
                            </div>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i className="fab fa-calendar-o" aria-hidden="true"></i>
                                <h4>Events</h4>
                                <h5 className="counter">823</h5>
                            </div>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i className="fab fa-shield" aria-hidden="true"></i>
                                <h4>Awards</h4>
                                <h5 className="counter">45</h5>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                {/* -- //schedule-bottom -- */}
                {/* -- banner-bootom-w3-agileits -- */}
                <div className="banner-bootom-w3-agileits">
                    <div className="container">
                        {/* ---728x90--- */}

                        <h3 className="wthree_text_info">What's <span>Trending</span></h3>

                        <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
                            <a href="women.html">
                                <div className="bb-left-agileits-w3layouts-inner grid">
                                    <figure className="effect-roxy">
                                        <img src={BB1} alt=" " className="img-responsive" />
                                        <figcaption>
                                            <h3><span>S</span>ale </h3>
                                            <p>Upto 55%</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
                            <div className="bb-middle-agileits-w3layouts grid">
                                <figure className="effect-roxy">
                                    <img src={Bottom3} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 55%</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="bb-middle-agileits-w3layouts forth grid">
                                <figure className="effect-roxy">
                                    <img src={Bottom4} alt=" " className="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 65%</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                {/* --/grids-- */}
                <div className="agile_last_double_sectionw3ls">
                    <div className="col-md-6 multi-gd-img multi-gd-text ">
                        <a href="womens.html"><img src={Bot_1} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>

                    </div>
                    <div className="col-md-6 multi-gd-img multi-gd-text ">
                        <a href="womens.html"><img src={Bot_2} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
                    </div>
                    <div className="clearfix"></div>
                </div>

                {/* --/grids-- */}

                <div className="new_arrivals_agile_w3ls_info">
                    <div className="container">
                        <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
                        <div id="horizontalTab">
                            <ul className="resp-tabs-list">
                                <li > Men's</li>
                                <li> Women's</li>
                                <li> Bags</li>
                                <li> Footwear</li>
                            </ul>

                            {/* <ul className="resp-tabs-list">
                                <li className="resp-tab-item " aria-controls="tab_item-0" role="tab1"> Men's</li>
                                <li className="resp-tab-item" aria-controls="tab_item-1" role="tab2"> Women's</li>
                                <li className="resp-tab-item" aria-controls="tab_item-2" role="tab3"> Bags</li>
                                <li className="resp-tab-item" aria-controls="tab_item-3" role="tab4"> Footwear</li>
                            </ul> */}
                            <div className="resp-tabs-container">
                                {/* --/tab_one-- */}
                                <div className="tab1" >
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M1} alt="" className="pro-image-front" />
                                                <img src={M1} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Formal Blue Shirt</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$45.99</span>
                                                    <del>$69.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Formal Blue Shirt" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M2} alt="" className="pro-image-front" />
                                                <img src={M2} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Gabi Full Sleeve Sweatshirt</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$45.99</span>
                                                    <del>$69.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Sweatshirt" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M3} alt="" className="pro-image-front" />
                                                <img src={M3} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Dark Blue Track Pants</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$80.99</span>
                                                    <del>$89.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Dark Blue Track Pants" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M4} alt="" className="pro-image-front" />
                                                <img src={M4} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Round Neck Black T-Shirt</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$190.99</span>
                                                    <del>$159.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Black T-Shirt" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M5} alt="" className="pro-image-front" />
                                                <img src={M5} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Men's Black Jeans</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$60.99</span>
                                                    <del>$90.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Men's Black Jeans" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M7} alt="" className="pro-image-front" />
                                                <img src={M7} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Analog Watch</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$160.99</span>
                                                    <del>$290.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Analog Watch" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M6} alt="" className="pro-image-front" />
                                                <img src={M6} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Reversible Belt</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$30.99</span>
                                                    <del>$50.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Reversible Belt" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src={M8} alt="" className="pro-image-front" />
                                                <img src={M8} alt="" className="pro-image-back" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>

                                            </div>
                                            <div className="item-info-product ">
                                                <h4><a href="single.html">Party Men's Blazer</a></h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$260.99</span>
                                                    <del>$390.71</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Party Men's Blazer" />
                                                            <input type="hidden" name="amount" value="30.99" />
                                                            <input type="hidden" name="discount_amount" value="1.00" />
                                                            <input type="hidden" name="currency_code" value="USD" />
                                                            <input type="hidden" name="return" value=" " />
                                                            <input type="hidden" name="cancel_return" value=" " />
                                                            <input type="submit" name="submit" value="Add to cart" className="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                {/* --//tab_one-- */}
                            </div>
                        </div>
                        {/* ----grids---- */}
                    </div>
                    {/* <!-- /we-offer --> */}
                    <div className="sale-w3ls">
                        <div className="container">
                            <h6>We Offer Flat <span>40%</span> Discount</h6>

                            <a className="hvr-outline-out button2" href="single.html">Shop Now </a>
                        </div>
                    </div>
                    {/* <!-- //we-offer --> */}
                    {/* <!--/grids--> */}
                    <div className="coupons">
                        <div className="coupons-grids text-center">
                            <div className="w3layouts_mail_grid">
                                <div className="col-md-3 w3layouts_mail_grid_left">
                                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                                        <i className="fa fa-truck" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3layouts_mail_grid_left2">
                                        <h3>FREE SHIPPING</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className="col-md-3 w3layouts_mail_grid_left">
                                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                                        <i className="fa fa-headphones" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3layouts_mail_grid_left2">
                                        <h3>24/7 SUPPORT</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className="col-md-3 w3layouts_mail_grid_left">
                                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3layouts_mail_grid_left2">
                                        <h3>MONEY BACK GUARANTEE</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className="col-md-3 w3layouts_mail_grid_left">
                                    <div className="w3layouts_mail_grid_left1 hvr-radial-out">
                                        <i className="fa fa-gift" aria-hidden="true"></i>
                                    </div>
                                    <div className="w3layouts_mail_grid_left2">
                                        <h3>FREE GIFT COUPONS</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--grids--> */}

                </div>



            </div>
        );

    }
}
export default home;