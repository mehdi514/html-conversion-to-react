import React, { Component } from "react";
import img from "../img/elements/user1.png";
import img1 from "../img/elements/user2.png";

class Testimonial extends Component {
  render() {
    return (
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
                  <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="desc">
                  <p>
                    Do you want to be even more successful? Learn to love
                    learning and growth. The more effort you put into improving
                    your skills, the bigger the payoff you.
                  </p>
                  <h4>Harriet Maxwell</h4>
                  <p>CEO at Google</p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="desc">
                  <p>
                    A purpose is the eternal condition for success. Every former
                    smoker can tell you just how hard it is to stop smoking
                    cigarettes. However.
                  </p>
                  <h4>Carolyn Craig</h4>
                  <p>CEO at Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
