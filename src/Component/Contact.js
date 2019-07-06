import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <body>
        <section className="relative about-banner">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">Contact Us</h1>
                <p className="text-white link-nav">
                  <a href="index.html">Home </a>{" "}
                  <span className="lnr lnr-arrow-right" />{" "}
                  <a href="contact.html"> Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page-area section-gap">
          <div className="container">
            <div className="row">
              <div
                className="map-wrap"
                style={{ width: "100%", height: "445px" }}
                id="map"
              />
              <div className="col-lg-4 d-flex flex-column address-wrap">
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-home" />
                  </div>
                  <div className="contact-details">
                    <h5>Binghamton, New York</h5>
                    <p>4343 Hinkle Deegan Lake Road</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-phone-handset" />
                  </div>
                  <div className="contact-details">
                    <h5>00 (958) 9865 562</h5>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-envelope" />
                  </div>
                  <div className="contact-details">
                    <h5>support@colorlib.com</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form
                  className="form-area contact-form text-right"
                  id="myForm"
                  action="mail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-6 form-group">
                      <input
                        name="name"
                        placeholder="Enter your name"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        className="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />

                      <input
                        name="email"
                        placeholder="Enter email address"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        className="common-input mb-20 form-control"
                        required=""
                        type="email"
                      />

                      <input
                        name="subject"
                        placeholder="Enter subject"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter subject'"
                        className="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <textarea
                        className="common-textarea form-control"
                        name="message"
                        placeholder="Enter Messege"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Messege'"
                        required=""
                      />
                    </div>
                    <div className="col-lg-12">
                      <div
                        className="alert-msg"
                        style={{ textAlign: "left" }}
                      />
                      <button
                        className="genric-btn primary"
                        style={{ float: "right" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
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

export default Contact;
