import React, { Component } from 'react';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
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
import W1 from '../../components/images/w1.jpg';
import W2 from '../../components/images/w2.jpg';
import W3 from '../../components/images/w3.jpg';
import W4 from '../../components/images/w4.jpg';
import W5 from '../../components/images/w5.jpg';
import W6 from '../../components/images/w6.jpg';
import W7 from '../../components/images/w7.jpg';
import W8 from '../../components/images/w8.jpg';
import './home.css';
class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* ----- banner ----- */}

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    {/* ---Indicators---- */}

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                        <li data-target="#myCarousel" data-slide-to="3" class=""></li>
                        <li data-target="#myCarousel" data-slide-to="4" class=""></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div class="container">
                                <div class="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a class="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div class="item item2">
                            <div class="container">
                                <div class="carousel-caption">
                                    <h3>Summer <span>Collection</span></h3>
                                    <p>New Arrivals On Sale</p>
                                    <a class="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div class="item item3">
                            <div class="container">
                                <div class="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a class="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div class="item item4">
                            <div class="container">
                                <div class="carousel-caption">
                                    <h3>Summer <span>Collection</span></h3>
                                    <p>New Arrivals On Sale</p>
                                    <a class="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                        <div class="item item5">
                            <div class="container">
                                <div class="carousel-caption">
                                    <h3>The Biggest <span>Sale</span></h3>
                                    <p>Special for today</p>
                                    <a class="hvr-outline-out button2" href="mens.html">Shop Now </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    {/*  ----The Modal----  */}

                </div>
                {/* ---- //banner --*/}
                {/*-----728x90--- */}
                <div class="banner_bottom_agile_info">
                    <div class="container">
                        <div class="banner_bottom_agile_info_inner_w3ls">
                            <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                                <figure class="effect-roxy">
                                    <img src={Bottom1} alt=" " class="img-responsive" />
                                    <figcaption>
                                        <h3><span>F</span>all Ahead</h3>
                                        <p>New Arrivals</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
                                <figure class="effect-roxy">
                                    <img src={Bottom2} alt=" " class="img-responsive" />
                                    <figcaption>
                                        <h3><span>F</span>all Ahead</h3>
                                        <p>New Arrivals</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>

                {/* schedule-bottom  */}

                <div class="schedule-bottom">
                    <div class="col-md-6 agileinfo_schedule_bottom_left">
                        <img src={Mid} alt=" " class="img-responsive" />
                    </div>
                    <div class="col-md-6 agileits_schedule_bottom_right">
                        <div class="w3ls_schedule_bottom_right_grid">
                            <h3>Save up to <span>50%</span> in this week</h3>
                            <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
					Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                            <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i class="fab fa-user-o" aria-hidden="true"></i>
                                <h4>Customers</h4>
                                <h5 class="counter">653</h5>
                            </div>
                            <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i class="fab fa-calendar-o" aria-hidden="true"></i>
                                <h4>Events</h4>
                                <h5 class="counter">823</h5>
                            </div>
                            <div class="col-md-4 w3l_schedule_bottom_right_grid1">
                                <i class="fab fa-shield" aria-hidden="true"></i>
                                <h4>Awards</h4>
                                <h5 class="counter">45</h5>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
                {/* -- //schedule-bottom -- */}
                {/* -- banner-bootom-w3-agileits -- */}
                <div class="banner-bootom-w3-agileits">
                    <div class="container">
                        {/* ---728x90--- */}

                        <h3 class="wthree_text_info">What's <span>Trending</span></h3>

                        <div class="col-md-5 bb-grids bb-left-agileits-w3layouts">
                            <a href="women.html">
                                <div class="bb-left-agileits-w3layouts-inner grid">
                                    <figure class="effect-roxy">
                                        <img src={BB1} alt=" " class="img-responsive" />
                                        <figcaption>
                                            <h3><span>S</span>ale </h3>
                                            <p>Upto 55%</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-7 bb-grids bb-middle-agileits-w3layouts">
                            <div class="bb-middle-agileits-w3layouts grid">
                                <figure class="effect-roxy">
                                    <img src={Bottom3} alt=" " class="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 55%</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="bb-middle-agileits-w3layouts forth grid">
                                <figure class="effect-roxy">
                                    <img src={Bottom4} alt=" " class="img-responsive" />
                                    <figcaption>
                                        <h3><span>S</span>ale </h3>
                                        <p>Upto 65%</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                {/* --/grids-- */}
                <div class="agile_last_double_sectionw3ls">
                    <div class="col-md-6 multi-gd-img multi-gd-text ">
                        <a href="womens.html"><img src={Bot_1} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>

                    </div>
                    <div class="col-md-6 multi-gd-img multi-gd-text ">
                        <a href="womens.html"><img src={Bot_2} alt=" " /><h4>Flat <span>50%</span> offer</h4></a>
                    </div>
                    <div class="clearfix"></div>
                </div>

                {/* --/grids-- */}

                <div className="new_arrivals_agile_w3ls_info">
                    <div className="container">
                        <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
                        <div id="horizontalTab">
                            <ul className="resp-tabs-list">
                                <li> Men's</li>
                                <li> Women's</li>
                                <li> Bags</li>
                                <li> Footwear</li>
                            </ul>
                            <div class="resp-tabs-container">
                                {/* --/tab_one-- */}
                                <div class="tab1">
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M1} alt="" class="pro-image-front" />
                                                <img src={M1} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Formal Blue Shirt</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$45.99</span>
                                                    <del>$69.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M2} alt="" class="pro-image-front" />
                                                <img src={M2} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Gabi Full Sleeve Sweatshirt</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$45.99</span>
                                                    <del>$69.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M3} alt="" class="pro-image-front" />
                                                <img src={M3} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Dark Blue Track Pants</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$80.99</span>
                                                    <del>$89.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M4} alt="" class="pro-image-front" />
                                                <img src={M4} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Round Neck Black T-Shirt</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$190.99</span>
                                                    <del>$159.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M5} alt="" class="pro-image-front" />
                                                <img src={M5} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Men's Black Jeans</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$60.99</span>
                                                    <del>$90.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M7} alt="" class="pro-image-front" />
                                                <img src={M7} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Analog Watch</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$160.99</span>
                                                    <del>$290.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M6} alt="" class="pro-image-front" />
                                                <img src={M6} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Reversible Belt</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$30.99</span>
                                                    <del>$50.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 product-men">
                                        <div class="men-pro-item simpleCart_shelfItem">
                                            <div class="men-thumb-item">
                                                <img src={M8} alt="" class="pro-image-front" />
                                                <img src={M8} alt="" class="pro-image-back" />
                                                <div class="men-cart-pro">
                                                    <div class="inner-men-cart-pro">
                                                        <a href="single.html" class="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span class="product-new-top">New</span>

                                            </div>
                                            <div class="item-info-product ">
                                                <h4><a href="single.html">Party Men's Blazer</a></h4>
                                                <div class="info-product-price">
                                                    <span class="item_price">$260.99</span>
                                                    <del>$390.71</del>
                                                </div>
                                                <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
                                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                                        </fieldset>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                {/* --//tab_one-- */}
                                {/* --/tab_two-- */}
						<div class="tab2">
							 <div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w1.jpg" alt="" class="pro-image-front"/>
										<img src="images/w1.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">A-line Black Skirt</a></h4>
										<div class="info-product-price">
											<span class="item_price">$130.99</span>
											<del>$189.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="A-line Black Skirt" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w2.jpg" alt="" class="pro-image-front"/>
										<img src="images/w2.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Sleeveless Solid Blue Top</a></h4>
										<div class="info-product-price">
											<span class="item_price">$140.99</span>
											<del>$189.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Sleeveless Solid Blue Top" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w3.jpg" alt="" class="pro-image-front"/>
										<img src="images/w3.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Skinny Jeans</a></h4>
										<div class="info-product-price">
											<span class="item_price">$150.99</span>
											<del>$189.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Skinny Jeans " />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w4.jpg" alt="" class="pro-image-front"/>
										<img src="images/w4.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Black Basic Shorts</a></h4>
										<div class="info-product-price">
											<span class="item_price">$120.99</span>
											<del>$189.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Black Basic Shorts" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w5.jpg" alt="" class="pro-image-front"/>
										<img src="images/w5.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Pink Track Pants</a></h4>
										<div class="info-product-price">
											<span class="item_price">$220.99</span>
											<del>$389.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Pink Track Pants" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w6.jpg" alt="" class="pro-image-front"/>
										<img src="images/w6.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Analog Watch</a></h4>
										<div class="info-product-price">
											<span class="item_price">$320.99</span>
											<del>$489.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
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
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
						    <div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w7.jpg" alt="" class="pro-image-front"/>
										<img src="images/w7.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Ankle Length Socks</a></h4>
										<div class="info-product-price">
											<span class="item_price">$100.99</span>
											<del>$159.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Ankle Length Socks" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
								<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="images/w8.jpg" alt="" class="pro-image-front"/>
										<img src="images/w8.jpg" alt="" class="pro-image-back"/>
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="single.html" class="link-product-add-cart">Quick View</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="single.html">Reebok Women's Tights</a></h4>
										<div class="info-product-price">
											<span class="item_price">$130.99</span>
											<del>$169.71</del>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
															<form action="#" method="post">
																<fieldset>
																	<input type="hidden" name="cmd" value="_cart" />
																	<input type="hidden" name="add" value="1" />
																	<input type="hidden" name="business" value=" " />
																	<input type="hidden" name="item_name" value="Reebok Women's Tights" />
																	<input type="hidden" name="amount" value="30.99" />
																	<input type="hidden" name="discount_amount" value="1.00" />
																	<input type="hidden" name="currency_code" value="USD" />
																	<input type="hidden" name="return" value=" " />
																	<input type="hidden" name="cancel_return" value=" " />
																	<input type="submit" name="submit" value="Add to cart" class="button" />
																</fieldset>
															</form>
														</div>
																			
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					 {/* --//tab_two-- */}

                            </div>
                        </div>
                        {/* ----grids---- */}
                    </div>
                </div>


                <Footer />
            </div>
        );

    }
}
export default home;