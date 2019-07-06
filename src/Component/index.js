import React, { Component } from "react";
import logo from "../img/hero-img.png";
import img1 from "../img/about-img.png";
import img2 from "../img/p1.jpg";
import img3 from "../img/preview.png";
import img4 from "../img/p2.jpg";
import img5 from "../img/p4.jpg";
import img6 from "../img/p3.jpg";
import img7 from "../img/p5.jpg";
import img8 from "../img/p6.jpg";
import img9 from "../img/elements/user1.png";
import img10 from "../img/elements/user2.png";
import img11 from "../img/b1.jpg";
import img12 from "../img/user.png";
import img13 from "../img/b2.jpg";
import img14 from "../img/user.png";
import img15 from "../img/b3.jpg";
import img16 from "../img/user.png";
import img17 from "../img/l1.png";
import img18 from "../img/l2.png";
import img19 from "../img/l3.png";
import img20 from "../img/l4.png";
import img21 from "../img/l5.png";

import "../css/main.css";

class Index extends Component {
  render() {
    return (
      <body>
        {/* <header id="header">
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="index.html">Home</a></li>
			          <li><a href="about.html">About</a></li>
			          <li><a href="services.html">Services</a></li>
			          <li><a href="portfolio.html">Portfolio</a></li>
			          <li><a href="price.html">Pricing</a></li>
			          <li class="menu-has-children"><a href="">Blog</a>
			            <ul>
			              <li><a href="blog-home.html">Blog Home</a></li>
			              <li><a href="blog-single.html">Blog Single</a></li>
			            </ul>
			          </li>	
			          <li class="menu-has-children"><a href="">Pages</a>
			            <ul>
		            	  <li><a href="elements.html">Elements</a></li>
				          <li class="menu-has-children"><a href="">Level 2 </a>
				            <ul>
				              <li><a href="#">Item One</a></li>
				              <li><a href="#">Item Two</a></li>
				            </ul>
				          </li>					                		
			            </ul>
			          </li>					          					          		          
			          <li><a href="contact.html">Contact</a></li>
			        </ul>
			      </nav><!-- #nav-menu-container -->		    		
		    	</div>
		    </div>
          </header><!-- #header --> */}

        <section className="banner-area">
          <div className="container">
            <div className="row fullscreen align-items-center justify-content-between">
              <div className="col-lg-6 col-md-6 banner-left">
                <h6>This is me</h6>
                <h1>Philip Gilbert</h1>
                <p>
                  You will begin to realise why this exercise is called the
                  Dickens Pattern with reference to the ghost showing Scrooge
                  some different futures.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                  discover now
                </a>
              </div>
              <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-about-area pt-120">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-md-6 home-about-left">
                <img className="img-fluid" src={img1} alt="" />
              </div>
              <div className="col-lg-5 col-md-6 home-about-right">
                <h6>About Me</h6>
                <h1 className="text-uppercase">Personal Details</h1>
                <p>
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought. such as Coca Cola.
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                  View Full Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content  col-lg-7">
                <div className="title text-center">
                  <h1 className="mb-10">My Offered Services</h1>
                  <p>
                    At about this time of year, some months after New Year’s
                    resolutions have been made and kept, or made and neglected.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-pie-chart" />
                  <a href="#">
                    <h4>Web Design</h4>
                  </a>
                  <p>
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-laptop-phone" />
                  <a href="#">
                    <h4>Web Development</h4>
                  </a>
                  <p>
                    If you are an entrepreneur, you know that your success
                    cannot depend on the opinions of others. Like the wind,
                    opinions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-camera" />
                  <a href="#">
                    <h4>Photography</h4>
                  </a>
                  <p>
                    Do you want to be even more successful? Learn to love
                    learning and growth. The more effort you put into improving
                    your skills.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-picture" />
                  <a href="#">
                    <h4>Clipping Path</h4>
                  </a>
                  <p>
                    Hypnosis quit smoking methods maintain caused quite a stir
                    in the medical world over the last two decades. There is a
                    lot of argument.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-tablet" />
                  <a href="#">
                    <h4>Apps Interface</h4>
                  </a>
                  <p>
                    Do you sometimes have the feeling that you’re running into
                    the same obstacles over and over again? Many of my
                    conflicts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-services">
                  <span className="lnr lnr-rocket" />
                  <a href="#">
                    <h4>Graphic Design</h4>
                  </a>
                  <p>
                    You’ve heard the expression, “Just believe it and it will
                    come.” Well, technically, that is true, however, ‘believing’
                    is not just thinking that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="facts-area section-gap" id="facts-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">2536</h1>
                <p>Projects Completed</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">6784</h1>
                <p>Happy Clients</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">2239</h1>
                <p>Cups of Coffee</p>
              </div>
              <div className="col-lg-3 col-md-6 single-fact">
                <h1 className="counter">435</h1>
                <p>Real Professionals</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-area section-gap" id="portfolio">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Our Latest Featured Projects</h1>
                  <p>Who are in extremely love with eco friendly system.</p>
                </div>
              </div>
            </div>

            <div className="filters">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".vector">Vector</li>
                <li data-filter=".raster">Raster</li>
                <li data-filter=".ui">UI/UX</li>
                <li data-filter=".printing">Printing</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row grid">
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img2} alt="" />
                    </div>
                    <a href="img/p1.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img4} alt="" />
                    </div>
                    <a href="img/p2.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all ui">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img6} alt="" />
                    </div>
                    <a href="img/p3.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Creative Poster Design</h4>
                    <div className="cat">Agency</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all printing">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img5} alt="" />
                    </div>
                    <a href="img/p4.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>Embosed Logo Design</h4>
                    <div className="cat">Portal</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all vector">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img7} alt="" />
                    </div>
                    <a href="img/p5.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>3D Helmet Design</h4>
                    <div className="cat">vector</div>
                  </div>
                </div>
                <div className="single-portfolio col-sm-4 all raster">
                  <div className="relative">
                    <div className="thumb">
                      <div className="overlay overlay-bg" />
                      <img className="image img-fluid" src={img8} alt="" />
                    </div>
                    <a href="img/p6.jpg" className="img-pop-up">
                      <div className="middle">
                        <div className="text align-self-center d-flex">
                          <img src={img3} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-inner">
                    <h4>2D Vinyl Design</h4>
                    <div className="cat">raster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Client’s Feedback About Me</h1>
                  <p>
                    It is very easy to start smoking but it is an uphill task to
                    quit it. Ask any chain smoker or even a person.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-testimonial">
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src={img9} alt="" />
                  </div>
                  <div className="desc">
                    <p>
                      Do you want to be even more successful? Learn to love
                      learning and growth. The more effort you put into
                      improving your skills, the bigger the payoff you.
                    </p>
                    <h4>Harriet Maxwell</h4>
                    <p>CEO at Google</p>
                  </div>
                </div>
                <div className="single-testimonial item d-flex flex-row">
                  <div className="thumb">
                    <img className="img-fluid" src={img10} alt="" />
                  </div>
                  <div className="desc">
                    <p>
                      A purpose is the eternal condition for success. Every
                      former smoker can tell you just how hard it is to stop
                      smoking cigarettes. However.
                    </p>
                    <h4>Carolyn Craig</h4>
                    <p>CEO at Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="price-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Choose Your Plan</h1>
                  <p>
                    When someone does something that they know that they
                    shouldn’t do, did they.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">01</h1>
                  <h4>Economy</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£199.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">02</h1>
                  <h4>Business</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£299.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">03</h1>
                  <h4>Premium</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£399.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 single-price">
                <div className="top-part">
                  <h1 className="package-no">04</h1>
                  <h4>Exclusive</h4>
                  <p className="mt-10">For the individuals</p>
                </div>
                <div className="package-list">
                  <ul>
                    <li>Secure Online Transfer</li>
                    <li>Unlimited Styles for interface</li>
                    <li>Reliable Customer Service</li>
                  </ul>
                </div>
                <div className="bottom-part">
                  <h1>£499.00</h1>
                  <a className="price-btn text-uppercase" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-blog-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text">
                <h1>Latest posts from our blog</h1>
                <p>
                  You may be a skillful, effective employer but if you don’t
                  trust your personnel and the opposite, then the chances of
                  improving and expanding the business
                </p>
              </div>
            </div>
            <div className="row">
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src={img11} alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={img12} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart" /> 15
                    <span className="lnr lnr-bubble" /> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Break Through Self Doubt And Fear</h4>
                </a>
                <p>
                  Dream interpretation has many forms; it can be done be done
                  for the sake of fun, hobby or can be taken up as a serious
                  career.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src={img13} alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={img14} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart" /> 15
                    <span className="lnr lnr-bubble" /> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Portable Fashion for young women</h4>
                </a>
                <p>
                  You may be a skillful, effective employer but if you don’t
                  trust your personnel and the opposite, then the chances of
                  improving.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-4">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src={img15} alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <img className="img-fluid" src={img16} alt="" />
                    <a href="#">
                      <span>Mark Wiens</span>
                    </a>
                  </div>
                  <div className="meta">
                    13th Dec
                    <span className="lnr lnr-heart" /> 15
                    <span className="lnr lnr-bubble" /> 04
                  </div>
                </div>
                <a href="#">
                  <h4>Do Dreams Serve As A Premonition</h4>
                </a>
                <p>
                  So many of us are demotivated to achieve anything. Such people
                  are not enthusiastic about anything. They don’t want to work
                  involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brands-area">
          <div className="container">
            <div className="brand-wrap">
              <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={img17} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={img18} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={img19} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={img20} alt="" />
                  </a>
                </div>
                <div className="col single-brand">
                  <a href="#">
                    <img className="mx-auto" src={img21} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h4>About Me</h4>
                  <p>
                    We have tested a number of registry fix and clean utilities
                    and present our top 3 list on our site for your convenience.
                  </p>
                  <p className="footer-text">
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Newsletter</h4>
                  <p>Stay updated with our latest trends</p>
                  <div className="" id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                      method="get"
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="EMAIL"
                          placeholder="Enter Email Address"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Email Address '"
                          required=""
                          type="email"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-default" type="submit">
                            <span className="lnr lnr-arrow-right" />
                          </button>
                        </div>
                        <div className="info" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                <div className="single-footer-widget">
                  <h4>Follow Me</h4>
                  <p>Let us be social</p>
                  <div className="footer-social d-flex align-items-center">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default Index;
