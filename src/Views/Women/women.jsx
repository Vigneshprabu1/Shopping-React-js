import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './women.css';
import W1 from '../../components/images/w1.jpg';
import W2 from '../../components/images/w2.jpg';
import W3 from '../../components/images/w3.jpg';
import W4 from '../../components/images/w4.jpg';
import W5 from '../../components/images/w5.jpg';
import W6 from '../../components/images/w6.jpg';
import W7 from '../../components/images/w7.jpg';
import W8 from '../../components/images/w8.jpg';
import Banner1 from '../../components/images/banner1.jpg';
import Banner3 from '../../components/images/banner3.jpg';
import Banner4 from '../../components/images/banner4.jpg';
import BB1 from '../../components/images/bb1.jpg';
import B7 from '../../components/images/b7.jpg';

import S6 from '../../components/images/s6.jpg';
class women extends Component {
    render() {

        return (
            <div>
                <div class="page-head_agile_info_w3l">
                    <div class="container">
                        <h3>Women's <span>Wear  </span></h3>

                        <div class="services-breadcrumb">
                            <div class="agile_inner_breadcrumb">

                                <ul class="w3_short">
                                    <li><a href="/">Home</a><i>|</i></li>
                                    <li>Women's Wear</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                {/* <!-- banner - bootom - w3 - agileits-- > */}
                <div class="banner-bootom-w3-agileits">
                    <div class="container">
                        {/* <!-- mens --> */}
                        <div class="col-md-4 products-left">
                            <div class="filter-price">
                                <h3>Filter By <span>Price</span></h3>
                                <ul class="dropdown-menu6">
                                    <li>
                                        <div id="slider-range"></div>
                                        <input type="text" id="amount" style={{ border: '0', color: '#00000', fontweight: 'normal' }} />
                                    </li>
                                </ul>
                            </div><br/><br/><br/>
                            <div class="css-treeview">
                                <h4>Categories</h4>
                                <ul class="tree-list-pad">
                                    <li><input type="checkbox" checked="checked" id="item-0" /><label for="item-0"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Men's Wear</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-0-0" /><label for="item-0-0"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Ethnic Wear</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Caps</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                    <li><a href="mens.html">Trousers</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-1" /><label for="item-0-1"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Party Wear</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Caps</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                    <li><a href="mens.html">Trousers</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-2" /><label for="item-0-2"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Casual Wear</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Caps</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                    <li><a href="mens.html">Trousers</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><input type="checkbox" id="item-1" checked="checked" /><label for="item-1"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Best Collections</label>
                                        <ul>
                                            <li><input type="checkbox" checked="checked" id="item-1-0" /><label for="item-1-0"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> New Arrivals</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><input type="checkbox" checked="checked" id="item-2" /><label for="item-2"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Best Offers</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-2-0" /><label for="item-2-0"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Summer Discount Sales</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-1" /><label for="item-2-1"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Exciting Offers</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-2" /><label for="item-2-2"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Flat Discounts</label>
                                                <ul>
                                                    <li><a href="mens.html">Shirts</a></li>
                                                    <li><a href="mens.html">Shoes</a></li>
                                                    <li><a href="mens.html">Pants</a></li>
                                                    <li><a href="mens.html">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="community-poll">
                                <h4>Community Poll</h4>
                                <div class="swit form">
                                    <form>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" checked="" /><i></i>More convenient for shipping and delivery</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Lower Price</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Track your item</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Bigger Choice</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>More colors to choose</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Secured Payment</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Money back guaranteed</label> </div></div>
                                        <div class="check_box"> <div class="radio"> <label><input type="radio" name="radio" /><i></i>Others</label> </div></div>
                                        <input type="submit" value="SEND" />
                                    </form>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-md-8 products-right">
                            <h5>Product <span>Compare(0)</span></h5>
                            <div class="sort-grid">
                                <div class="sorting">
                                    <h6>Sort By</h6>
                                    <select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
                                        <option value="null">Default</option>
                                        <option value="null">Name(A - Z)</option>
                                        <option value="null">Name(Z - A)</option>
                                        <option value="null">Price(High - Low)</option>
                                        <option value="null">Price(Low - High)</option>
                                        <option value="null">Model(A - Z)</option>
                                        <option value="null">Model(Z - A)</option>
                                    </select>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="sorting">
                                    <h6>Showing</h6>
                                    <select id="country2" onchange="change_country(this.value)" class="frm-field required sect">
                                        <option value="null">7</option>
                                        <option value="null">14</option>
                                        <option value="null">28</option>
                                        <option value="null">35</option>
                                    </select>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div id="slider">
					  <figure>
						    <img src={Banner1}/>
						    <img src={Banner3}/>
						    <img src={Banner4}/>
					  </figure>
				</div>
                            <div class="men-wear-bottom">
                                <div class="col-sm-4 men-wear-left">
                                    <img class="img-responsive" src={BB1} alt=" " />
                                </div>
                                <div class="col-sm-8 men-wear-right">
                                    <h4>Exclusive Women's <span>Collections</span></h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit aut fugit. </p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="col-md-4 product-men">
                                <div class="men-pro-item simpleCart_shelfItem">
                                    <div class="men-thumb-item">
                                        <img src={W4} alt="" class="pro-image-front" />
                                        <img src={W4} alt="" class="pro-image-back" />
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
                            <div class="col-md-4 product-men">
                                <div class="men-pro-item simpleCart_shelfItem">
                                    <div class="men-thumb-item">
                                        <img src={B7} alt="" class="pro-image-front" />
                                        <img src={B7} alt="" class="pro-image-back" />
                                        <div class="men-cart-pro">
                                            <div class="inner-men-cart-pro">
                                                <a href="single.html" class="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span class="product-new-top">New</span>

                                    </div>
                                    <div class="item-info-product ">
                                        <h4><a href="single.html">Costa Swiss Bag </a></h4>
                                        <div class="info-product-price">
                                            <span class="item_price">$290.99</span>
                                            <del>$359.71</del>
                                        </div>
                                        <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Costa Swiss Bag" />
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
                            <div class="col-md-4 product-men">
                                <div class="men-pro-item simpleCart_shelfItem">
                                    <div class="men-thumb-item">
                                        <img src={S6} alt="" class="pro-image-front" />
                                        <img src={S6} alt="" class="pro-image-back" />
                                        <div class="men-cart-pro">
                                            <div class="inner-men-cart-pro">
                                                <a href="single.html" class="link-product-add-cart">Quick View</a>
                                            </div>
                                        </div>
                                        <span class="product-new-top">New</span>

                                    </div>
                                    <div class="item-info-product ">
                                        <h4><a href="single.html">Aero Canvas Loafers  </a></h4>
                                        <div class="info-product-price">
                                            <span class="item_price">$120.99</span>
                                            <del>$199.71</del>
                                        </div>
                                        <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart" />
                                                    <input type="hidden" name="add" value="1" />
                                                    <input type="hidden" name="business" value=" " />
                                                    <input type="hidden" name="item_name" value="Aero Canvas Loafers" />
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
                        <div class="clearfix"></div>

                        <div class="single-pro">
                            <div class="col-md-3 product-men">
                                <div class="men-pro-item simpleCart_shelfItem">
                                    <div class="men-thumb-item">
                                        <img src={W1} alt="" class="pro-image-front" />
                                        <img src={W1} alt="" class="pro-image-back" />
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
                                        <img src={W2} alt="" class="pro-image-front" />
                                        <img src={W2} alt="" class="pro-image-back" />
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
                                        <img src={W3} alt="" class="pro-image-front" />
                                        <img src={W3} alt="" class="pro-image-back" />
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
                                        <img src={W4} alt="" class="pro-image-front" />
                                        <img src={W4} alt="" class="pro-image-back" />
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
                                        <img src={W5} alt="" class="pro-image-front" />
                                        <img src={W5} alt="" class="pro-image-back" />
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
                                        <img src={W6} alt="" class="pro-image-front" />
                                        <img src={W6} alt="" class="pro-image-back" />
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
                                        <img src={W7} alt="" class="pro-image-front" />
                                        <img src={W7} alt="" class="pro-image-back" />
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
                                        <img src={W8} alt="" class="pro-image-front" />
                                        <img src={W8} alt="" class="pro-image-back" />
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
                    </div>
                </div>

                {/* <!--/grids--> */}
                <div class="coupons">
                    <div class="coupons-grids text-center">
                        <div class="w3layouts_mail_grid">
                            <div class="col-md-3 w3layouts_mail_grid_left">
                                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                                    <i class="fa fa-truck" aria-hidden="true"></i>
                                </div>
                                <div class="w3layouts_mail_grid_left2">
                                    <h3>FREE SHIPPING</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div class="col-md-3 w3layouts_mail_grid_left">
                                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                                    <i class="fa fa-headphones" aria-hidden="true"></i>
                                </div>
                                <div class="w3layouts_mail_grid_left2">
                                    <h3>24/7 SUPPORT</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div class="col-md-3 w3layouts_mail_grid_left">
                                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                </div>
                                <div class="w3layouts_mail_grid_left2">
                                    <h3>MONEY BACK GUARANTEE</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div class="col-md-3 w3layouts_mail_grid_left">
                                <div class="w3layouts_mail_grid_left1 hvr-radial-out">
                                    <i class="fa fa-gift" aria-hidden="true"></i>
                                </div>
                                <div class="w3layouts_mail_grid_left2">
                                    <h3>FREE GIFT COUPONS</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div class="clearfix"> </div>
                        </div>

                    </div>
                </div>
                {/* <!--grids--> */}



            </div>

        );


    }


}
export default women;