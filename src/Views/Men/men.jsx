import React, { Component } from 'react';
import './men.css';
import { Link } from 'react-router-dom';
import M1 from '../../components/images/m1.jpg';
import M2 from '../../components/images/m2.jpg';
import M3 from '../../components/images/m3.jpg';
import M4 from '../../components/images/m4.jpg';
import M5 from '../../components/images/m5.jpg';
import M6 from '../../components/images/m6.jpg';
import M7 from '../../components/images/m7.jpg';
import M8 from '../../components/images/m8.jpg';
import Banner2 from '../../components/images/banner2.jpg';
import Banner5 from '../../components/images/banner5.jpg';
import BB2 from '../../components/images/bb2.jpg';
import S1 from '../../components/images/s1.jpg';
class men extends Component {
    

    render() {
       
       
        return (
            <div>
                {/* <!-- /banner_bottom_agile_info --> */}
                <div className="page-head_agile_info_w3l">
                    <div className="container">
                        <h3>Men's <span>Wear  </span></h3>
                        {/* <!--/w3_short--> */}
                        <div className="services-breadcrumb">
                            <div className="agile_inner_breadcrumb">

                                <ul className="w3_short">
                                    <li><Link to="/">Home</Link><i>|</i></li>
                                    <li>Men's Wear</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--//w3_short--> */}
                    </div>
                </div>

                {/* <!-- banner-bootom-w3-agileits --> */}
                <div className="banner-bootom-w3-agileits">
                    <div className="container">
                        {/* <!-- mens --> */}
                        <div className="col-md-4 products-left">
                            <div className="filter-price"   > 
                                <h3>Filter By <span>Price</span></h3>
                                <ul className="dropdown-menu6">
                                    <li>
                                        <div id="slider-range"></div>
                                        <input type="text" id="amount" style={{border:'0',color: '#ffffff', fontweight: 'normal'}} />
                                    </li>
                                </ul>
                            </div>
                            <br/><br/><br/>
                                <br/>
                            <div className="css-treeview">
                                <h4>Categories</h4>
                                <ul className="tree-list-pad">
                                    <li><input type="checkbox" checked="checked" id="item-0" /><label htmlFor="item-0"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Men's Wear</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-0-0" /><label htmlFor="item-0-0"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Ethnic Wear</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Caps</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                    <li><Link to={"/men"}>Trousers</Link></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-1" /><label htmlFor="item-0-1"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Party Wear</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Caps</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                    <li><Link to={"/men"}>Trousers</Link></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-2" /><label htmlFor="item-0-2"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Casual Wear</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Caps</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                    <li><Link to={"/men"}>Trousers</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><input type="checkbox" id="item-1" checked="checked" /><label htmlFor="item-1"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Best Collections</label>
                                        <ul>
                                            <li><input type="checkbox" checked="checked" id="item-1-0" /><label htmlFor="item-1-0"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> New Arrivals</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><input type="checkbox" checked="checked" id="item-2" /><label htmlFor="item-2"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Best Offers</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-2-0" /><label htmlFor="item-2-0"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Summer Discount Sales</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-1" /><label htmlFor="item-2-1"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Exciting Offers</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-2" /><label htmlFor="item-2-2"><i className="fab fa-long-arrow-right" aria-hidden="true"></i> Flat Discounts</label>
                                                <ul>
                                                    <li><Link to={"/men"}>Shirts</Link></li>
                                                    <li><Link to={"/men"}>Shoes</Link></li>
                                                    <li><Link to={"/men"}>Pants</Link></li>
                                                    <li><Link to={"/men"}>SunGlasses</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="community-poll">
                                <h4>Community Poll</h4>
                                <div className="swit form">
                                    <form>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" checked="" /><i></i>More convenient for shipping and delivery</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Lower Price</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Track your item</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Bigger Choice</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>More colors to choose</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Secured Payment</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Money back guaranteed</label> </div></div>
                                        <div className="check_box"> <div className="radio"> <label><input type="radio" name="radio" /><i></i>Others</label> </div></div>
                                        <input type="submit" value="SEND" />
                                    </form>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-8 products-right">
                            <h5>Product <span>Compare(0)</span></h5>
                            <div className="sort-grid">
                                <div className="sorting">
                                    <h6>Sort By</h6>
                                    <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                        <option value="null">Default</option>
                                        <option value="null">Name(A - Z)</option>
                                        <option value="null">Name(Z - A)</option>
                                        <option value="null">Price(High - Low)</option>
                                        <option value="null">Price(Low - High)</option>
                                        <option value="null">Model(A - Z)</option>
                                        <option value="null">Model(Z - A)</option>
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="sorting">
                                    <h6>Showing</h6>
                                    <select id="country2" onchange="change_country(this.value)" className="frm-field required sect">
                                        <option value="null">7</option>
                                        <option value="null">14</option>
                                        <option value="null">28</option>
                                        <option value="null">35</option>
                                    </select>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div id="slider">
					  <figure>
						    <img alt="" src={Banner2}/>
						    <img alt="" src={Banner5}/>
						    <img alt=""src={Banner2}/>
					  </figure>
				</div>
                            <div className="men-wear-bottom">
                                <div className="col-sm-4 men-wear-left">
                                    <img className="img-responsive" src={BB2} alt=" " />
                                </div>
                                <div className="col-sm-8 men-wear-right">
                                    <h4>Exclusive Men's <span>Collections</span></h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                odit aut fugit. </p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-4 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={M8} alt="" className="pro-image-front" />
                                        <img src={M8} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Party Men's Blazer</Link></h4>
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
                            <div className="col-md-4 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={M7} alt="" className="pro-image-front" />
                                        <img src={M7} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Analog Watch</Link></h4>
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
                            <div className="col-md-4 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={S1} alt="" className="pro-image-front" />
                                        <img src={S1} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Running Shoes</Link></h4>
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
                                                    <input type="hidden" name="item_name" value="Running Shoes" />
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
                        <div className="clearfix"></div>

                        <div className="single-pro">
                            <div className="col-md-3 product-men">
                                <div className="men-pro-item simpleCart_shelfItem">
                                    <div className="men-thumb-item">
                                        <img src={M1} alt="" className="pro-image-front" />
                                        <img src={M1} alt="" className="pro-image-back" />
                                        <div className="men-cart-pro">
                                            <div className="inner-men-cart-pro">
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>                                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Formal Blue Shirt</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Gabi Full Sleeve Sweatshirt</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Dark Blue Track Pants</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Round Neck Black T-Shirt</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Men's Black Jeans</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Analog Watch</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Reversible Belt</Link></h4>
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
                                                <Link to="single.html" className="link-product-add-cart">Quick View</Link>
                                            </div>
                                        </div>
                                        <span className="product-new-top">New</span>

                                    </div>
                                    <div className="item-info-product ">
                                        <h4><Link to="single.html">Party Men's Blazer</Link></h4>
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
                    </div>
                </div>
                {/* <!-- //mens --> */}
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

        );


    }



}
export default men;