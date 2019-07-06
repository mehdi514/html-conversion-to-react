import React, { Component } from "react";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import img from "../img/preview.png";

class Portfolio extends Component {
  render() {
    return (
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
                    <img className="image img-fluid" src={p1} alt="" />
                  </div>
                  <a href="img/p1.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
                    <img className="image img-fluid" src={p2} alt="" />
                  </div>
                  <a href="img/p2.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
                    <img className="image img-fluid" src={p3} alt="" />
                  </div>
                  <a href="img/p3.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
                    <img className="image img-fluid" src={p4} alt="" />
                  </div>
                  <a href="img/p4.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
                    <img className="image img-fluid" src={p5} alt="" />
                  </div>
                  <a href="img/p5.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
                    <img className="image img-fluid" src={p6} alt="" />
                  </div>
                  <a href="img/p6.jpg" className="img-pop-up">
                    <div className="middle">
                      <div className="text align-self-center d-flex">
                        <img src={img} alt="" />
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
    );
  }
}

export default Portfolio;
