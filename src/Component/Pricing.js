import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <section className="price-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Choose Your Plan</h1>
                <p>
                  When someone does something that they know that they shouldn’t
                  do, did they.
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
    );
  }
}

export default Pricing;
